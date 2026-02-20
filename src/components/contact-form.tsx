"use client";
import React from "react";

export function ContactForm() {
    const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mgolllga", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full mt-8 p-6 sm:p-8 bg-[#0a0a0a] border border-neutral-800 rounded-none relative overflow-hidden group/form shadow-2xl">
            {/* Minimal Terminal Header */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 opacity-50" />
            <div className="absolute right-4 top-4 flex gap-1.5 opacity-40">
                <div className="w-2 h-2 rounded-none bg-neutral-600"></div>
                <div className="w-2 h-2 rounded-none bg-neutral-600"></div>
                <div className="w-2 h-2 rounded-none bg-neutral-600"></div>
            </div>

            {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 gap-6 relative z-10 w-full animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-none flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-none"></div>
                        <svg className="w-8 h-8 text-emerald-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-3 font-mono">
                        <h3 className="text-emerald-500 font-bold tracking-widest text-lg uppercase flex items-center gap-2">
                            <span className="opacity-50">[OK]</span> TRANSMISSION_SUCCESSFUL
                        </h3>
                        <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                            Payload securely delivered over encrypted channel. Expect a response soon.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] font-mono text-neutral-600 mt-4 px-4 py-2 bg-[#111] border border-neutral-800 rounded-none w-fit">
                        <div className="flex gap-1.5">
                            <span className="w-1.5 h-1.5 bg-neutral-700 animate-pulse delay-75"></span>
                            <span className="w-1.5 h-1.5 bg-neutral-700 animate-pulse delay-150"></span>
                            <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse delay-300"></span>
                        </div>
                        CONNECTION_CLOSED
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex flex-col gap-2 mt-4 relative z-10">
                        <label htmlFor="email" className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest flex gap-2 items-center">
                            <span className="text-emerald-500">{">"}</span> EMAIL_ADDRESS
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 font-mono text-sm">$</span>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="collab@example.com"
                                className="w-full bg-[#111] border border-neutral-800 rounded-none py-3 pl-8 pr-4 text-neutral-300 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-neutral-700 font-mono text-sm shadow-inner"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 relative z-10">
                        <label htmlFor="message" className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest flex gap-2 items-center">
                            <span className="text-emerald-500">{">"}</span> MESSAGE_PAYLOAD
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-neutral-600 font-mono text-sm">$</span>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Tell me about your project..."
                                className="w-full bg-[#111] border border-neutral-800 rounded-none pt-3 pb-3 pl-8 pr-4 text-neutral-300 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-neutral-700 font-mono text-sm resize-none shadow-inner"
                                required
                            />
                        </div>
                    </div>

                    {/* Terminal Submit Button */}
                    <div className="mt-4 relative z-10">
                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="group relative inline-flex items-center justify-center font-mono font-medium text-sm tracking-wide overflow-hidden rounded-none h-14 px-8 bg-[#111] border border-neutral-800 hover:border-emerald-500/30 transition-all duration-500 shadow-xl hover:shadow-emerald-500/10 w-full sm:w-auto cursor-pointer disabled:opacity-70 disabled:cursor-wait"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                            <span className="text-neutral-400 group-hover:text-white transition-colors flex items-center gap-3 relative z-10">
                                {status === "idle" && (
                                    <>
                                        <span className="text-emerald-500">~</span>
                                        <span className="text-sky-400">./</span>send_message.sh
                                    </>
                                )}
                                {status === "submitting" && (
                                    <>
                                        <span className="text-amber-500">~</span>
                                        <span className="text-sky-400">./</span>executing...
                                    </>
                                )}
                                {status === "error" && (
                                    <>
                                        <span className="text-rose-500">[ERR]</span> connection_failed
                                    </>
                                )}
                                <span className="w-1.5 h-4 bg-emerald-500/80 animate-blink opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </span>

                            {/* Sleek Theme Gradient Border Bottom */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </button>
                    </div>
                </>
            )}

            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none rounded-none" />
        </form>
    );
}
