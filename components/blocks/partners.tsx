import Image from "next/image";

export default function Partners() {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-6 py-8">
                <div>
                    <p className="text-muted-foreground font-medium">Sponsors and partners :</p>
                    <div className="mt-4 flex items-center gap-12">
                        <div className="flex">
                            <Image
                                className="mx-auto h-15 w-fit"
                                src="/blocks/consulate.svg"
                                alt="Nvidia Logo"
                                height="16"
                                width="20"
                            />
                        </div>
                         <div className="flex">
                            <Image
                                className="mx-auto h-15 w-fit"
                               src="/blocks/mwf.svg"
                                alt="Column Logo"
                                height="16"
                                width="20"
                            />
                        </div>

                        <div className="flex">
                            <Image
                                className="mx-auto h-15 w-fit"
                               src="/blocks/rlc.svg"
                                alt="Column Logo"
                                height="16"
                                width="20"
                            />
                        </div>
                        <div className="flex">
                            <Image
                                className="mx-auto h-15 w-fit"
                               src="/blocks/corner.svg"
                                alt="GitHub Logo"
                                height="16"
                                width="20"
                            />
                        </div>
                        <div className="flex">
                            <Image
                                className="mx-auto h-15 w-fit"
                                src="/blocks/learners.svg"
                                alt="Nike Logo"
                                height="16"
                                width="20"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}