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
            <section id="benefits" className="container relative mx-auto px-4 py-16 md:py-24">
                <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
                    {/* Benefits Cards */}
                    <div className="order-2 lg:order-1">
                        <div className="grid gap-6 grid-cols-2">
                            <div className="space-y-6">
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
                            <div className="space-y-6 pt-16 md:pt-12">
                                {benefitsImgs.slice(3).map((benefit) => (
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
                    </div>

                    {/* Section Title */}
                    <div className="order-1 lg:order-2">
                        <div className="top-24 space-y-4">
                            <small className="text-quivyOrange text-sm font-medium">
                                <span className="text-quivyPurple">-</span> Benefits
                            </small>
                            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
                                Why <span className="text-quivyPurple">Quivy</span> your giveaway with us?
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Illustration Section */}
            <section className="relative bg-[#F1ECFF] py-32 md:py-60 w-full">
                <div className="container relative mx-auto px-4">
                    <Image
                        src={BenefitIllustration}
                        alt="Benefits Illustration"
                        width={700}
                        height={700}
                        className="absolute left-1/2 md:left-3/4 top-0 md:-top-36 w-[280px] -translate-x-1/2 -translate-y-1/2 md:w-[500px] lg:w-[700px]"
                    />
                </div>
            </section>
        </>
    )
}

export default Benefits