"use client"
import React from 'react'
import AudienceEngagmentImg from "@/public/assets/illustrations/IntersectThreeaudienceengagement.png";
import PromoteNewProductImg from "@/public/assets/illustrations/FediverseLogopromotenewproduct.png";
import BuildCustomerLoyaltyImg from "@/public/assets/illustrations/Heartbeatcustomerloyalty.png";
import BrandAwarenessImg from "@/public/assets/illustrations/Vectorbrandawareness.png";
import ScalableSolutionImg from "@/public/assets/illustrations/Vectorscalablesolution.png";
import AppBenefits from '@/components/AppBenefits';
import BenefitIllustration from "@/public/assets/illustrations/benefitillustration.png";
import Image from 'next/image';

const Benefits = () => {

    const benefitsImgs = [
        {
            id: 1,
            img: AudienceEngagmentImg,
            title: "Audience Engagement",
            description:
                " Create an interactive experience that keeps your audience engaged and excited.",
            color: "bg-[#000000]",
        },
        {
            id: 2,
            img: PromoteNewProductImg,
            title: "Promote New Product",
            description:
                "Use giveaways to attract attention to new products, increase visibility and strengthen customer interest.",
            color: "bg-[#321A72]",
        },
        {
            id: 3,
            img: BuildCustomerLoyaltyImg,
            title: "Build Customer Loyalty",
            description:
                "Reward participants, strengthen trust, and keep customers engaged for long-term loyalty.",
            color: "bg-[#FF0000]",
        },
        {
            id: 4,
            img: BrandAwarenessImg,
            title: "Brand Awareness",
            description:
                "Increase brand awareness by reaching a wider audience and making your brand more recognizable.",
            color: "bg-[#7340FD]",
        },
        {
            id: 5,
            img: ScalableSolutionImg,
            title: "Scalable Solution",
            description:
                "Either it's a small gathering or a large event, manage your audience easily and capture their attention.",
            color: "bg-[#FF9800]",
        },
    ];


    return (
        <>
            <section className="w-full h-[100dvh] flex flex-col-reverse md:grid md:grid-cols-[1fr_0.5fr] justify-center items-center relative p-6">
                {/* <MemoRotatingOrbs className="absolute top-0 left-2/4 -z-0"/> */}
                <div className="flex justify-center items-center space-x-8 p-5 relative z-20">
                    <div className="grid grid-rows-2 grid-cols-1 gap-7">
                        {benefitsImgs.slice(0, 3).map((benefit) => (
                            <AppBenefits
                                key={benefit.id}
                                img={benefit.img}
                                title={benefit.title}
                                description={benefit.description}
                                color={benefit.color}
                            />
                        ))}
                    </div>
                    <div className="grid grid-rows-2 grid-cols-1 gap-7">
                        {benefitsImgs.slice(-2).map((benefit) => (
                            <AppBenefits
                                key={benefit.id}
                                img={benefit.img}
                                title={benefit.title}
                                description={benefit.description}
                                color={benefit.color}
                            />
                        ))}
                    </div>
                </div>
                <div className="justify-self-end relative z-20 left-24 top-20 md:top-0 md:left-0">
                    <small className="text-quivyOrange text-xs font-medium">
                        {" "}
                        <span className="text-quivyPurple"> - </span> Benefits{" "}
                    </small>
                    <h2 className="text-2xl md:text-5xl max-w-[200px] md:max-w-[400px] font-semibold capitalize">
                        Why <span className="text-quivyPurple">Quivy</span> your giveaway
                        with us?
                    </h2>
                </div>
            </section>
            <section className="relative w-full h-[50dvh] bg-[#F1ECFF]">
                <Image
                    src={BenefitIllustration}
                    alt=""
                    className=" w-[250px] md:w-[700px] absolute md:-top-60 md:left-1/2 md:mx-3"
                />
            </section>
        </>
    )
}

export default Benefits