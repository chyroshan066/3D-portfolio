"use client";

import { GradientSpheres } from "@/components/GradientSphere";
import { TitleHeader } from "@/components/TitleHeader";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Alien } from "../../public/models/Alien";
import { OrbitControls } from "@react-three/drei";

export const About = () => {
    return <>
        <section id="about" className="flex-center md:p-0 px-5 border border-red-500">

            <GradientSpheres sphere1Class={"about-gradient-sphere about-sphere-1"} sphere2Class={"about-gradient-sphere about-sphere-2"} />

            <div className="container w-full h-full md:my-40 my-20 relative z-10">

                <TitleHeader title={"About Me"} text={"Passionate Developer, Lifelong Learner"} number={"01"} />

                <div className="md:mt-20 mt-10">
                    <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
                        <div className="md:col-span-7 col-span-12 row-span-5">
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                                <div>
                                    <div className="relative md:w-32 w-16 h-auto aspect-square">
                                        <Image
                                            src="images/flower.svg"
                                            alt="flower"
                                            fill
                                            className="object-contain flower"
                                        />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h1 className="text-blue-50 md:text-5xl text-3xl">Roshan Chaudhary</h1>
                                    <p className="md:text-2xl mt-2">
                                        I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-5 col-span-12 row-span-5">
                            <div className="bg-[#c8d751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                                <div className="w-full h-full">
                                    <Canvas>
                                        <OrbitControls enableZoom={false} />
                                        <Alien
                                            scale={2}
                                            position={[0, -5.5, 0]}
                                            rotation={[0, -0.5, 0]}
                                        />
                                    </Canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}