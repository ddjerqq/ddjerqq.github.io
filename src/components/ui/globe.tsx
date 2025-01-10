"use client";
import {useEffect, useRef, useState} from "react";
import {Color, Fog, PerspectiveCamera, Scene, Vector3} from "three";
import ThreeGlobe from "three-globe";
import {Canvas, extend, Object3DNode, useThree} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import countries from "@/data/countries.json";
import flights from "@/data/flights.json";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}

extend({ThreeGlobe});

const RING_PROPAGATION_SPEED = 2;
const cameraZ = 300;

const globeConfig = {
  pointSize: 1,
  atmosphereColor: "#9d92da",
  showAtmosphere: true,
  atmosphereAltitude: 0.2,
  polygonColor: "#A2BEE2FF",
  globeColor: "#214266",
  emissive: "#234e69",
  emissiveIntensity: 0.1,
  shininess: 0.7,
  arcTime: 1500,
  arcLength: 0.9,
  rings: 3,
  maxRings: 3,
};

export type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

let numbersOfRings = [3];

export function Globe() {
  const [globeData, setGlobeData] = useState<
    | {
    size: number;
    order: number;
    color: (t: number) => string;
    lat: number;
    lng: number;
  }[]
    | null
  >(null);

  const globeRef = useRef<ThreeGlobe | null>(null);

  useEffect(() => {
    if (globeRef.current) {
      _buildData();
      _buildMaterial();
    }
  }, [globeRef.current]);

  const _buildMaterial = () => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  };

  const _buildData = () => {
    const arcs = flights as Position[];
    let points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
      points.push({
        size: globeConfig.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: globeConfig.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    // remove duplicates for same lat and lng
    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every(
            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
          )
        ) === i
    );

    setGlobeData(filteredPoints);
  };

  useEffect(() => {
    if (globeRef.current && globeData) {
      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.6)
        .showAtmosphere(globeConfig.showAtmosphere)
        .atmosphereColor(globeConfig.atmosphereColor)
        .atmosphereAltitude(globeConfig.atmosphereAltitude)
        .hexPolygonColor((_) => globeConfig.polygonColor);
      startAnimation();
    }
  }, [globeData]);

  const startAnimation = () => {
    if (!globeRef.current || !globeData) return;

    globeRef.current
      .arcsData(flights)
      .arcStartLat((d) => (d as { startLat: number }).startLat)
      .arcStartLng((d) => (d as { startLng: number }).startLng)
      .arcEndLat((d) => (d as { endLat: number }).endLat)
      .arcEndLng((d) => (d as { endLng: number }).endLng)
      .arcColor((e: any) => (e as { color: string }).color)
      .arcAltitude((e) => {
        return (e as { arcAlt: number }).arcAlt;
      })
      .arcStroke((_) => {
        return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
      })
      .arcDashLength(globeConfig.arcLength)
      .arcDashInitialGap((e) => (e as { order: number }).order)
      .arcDashGap(15)
      .arcDashAnimateTime((_) => globeConfig.arcTime);

    globeRef.current
      .pointsData(flights)
      .pointColor((e) => (e as { color: string }).color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globeRef.current
      .ringsData([])
      .ringColor((e: any) => (t: any) => e.color(t))
      .ringMaxRadius(globeConfig.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (globeConfig.arcTime * globeConfig.arcLength) / globeConfig.rings
      );
  };

  useEffect(() => {
    if (!globeRef.current || !globeData) return;

    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return;
      numbersOfRings = genRandomNumbers(
        0,
        flights.length,
        Math.floor((flights.length * 4) / 5)
      );

      globeRef.current.ringsData(
        globeData.filter((d, i) => numbersOfRings.includes(i))
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [globeRef.current, globeData]);

  return (
    <>
      <threeGlobe ref={globeRef}/>
    </>
  );
}

export function WebGLRendererConfig() {
  const {gl, size} = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, []);

  return null;
}

export function World() {
  const scene = new Scene();

  const ambientLight = "#ebe2c4";
  const directionalLeftLight = "#9118cd";
  const directionalTopLight = "#869ce6";
  const directionalBottomLight = "#8fccd8";

  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, 1, 180, 1800)}>
      <WebGLRendererConfig/>
      <ambientLight color={ambientLight} intensity={0.6}/>
      <directionalLight
        color={directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <directionalLight
        color={directionalBottomLight}
        position={new Vector3(200, -500, -200)}
      />
      <Globe/>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        dampingFactor={0.1}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={-0.2}
        autoRotate={true}
        rotateSpeed={0.1}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}
