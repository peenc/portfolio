import { useState } from "react";
import InfoSection from "./InfoSection.jsx";
import emailjs from "emailjs-com";

export default function Contact() {

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // "success" | "error" | null

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        emailjs.sendForm(
            "service_um62vzn",
            "template_vw2gfvn",
            e.target,
            "HlV7oSTgD7GJWkzYZ"
        )
            .then(() => {
                setStatus("success");
                setLoading(false);
                e.target.reset();

                setTimeout(() => setStatus(null), 4000);
            })
            .catch(() => {
                setStatus("error");
                setLoading(false);

                setTimeout(() => setStatus(null), 4000);
            });
    };

    return (
        <InfoSection id="contato" title="Contato" >
            <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-start ">

                {/* INFO */}
                <div className="space-y-6 md:space-y-8 text-center md:text-left ">

                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                            Vamos conversar
                        </h3>

                        <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 leading-relaxed">
                            Estou aberto a novas oportunidades, projetos,
                            freelas e colaborações.
                            Se você tem uma ideia ou precisa de ajuda técnica,
                            é só me chamar.
                        </p>
                    </div>

                    <div className="space-y-3 text-base sm:text-lg">
                        <p className="text-gray-700 dark:text-slate-300">
                            <span className="font-medium text-gray-900 dark:text-white">
                                Email:
                            </span>{" "}
                            <a
                                href="mailto:pedro_cardoso@ufrrj.br"
                                className="text-cyan-500 hover:text-cyan-400 transition"
                            >
                                pedro_cardoso@ufrrj.br
                            </a>
                        </p>

                        <p className="text-gray-700 dark:text-slate-300">
                            <span className="font-medium text-gray-900 dark:text-white">
                                Localização:
                            </span>{" "}
                            Rio de Janeiro – RJ
                        </p>
                    </div>
                </div>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="
                        border border-gray-200 dark:border-slate-800
                        rounded-2xl md:rounded-3xl
                        bg-white dark:bg-slate-900/40
                        backdrop-blur-xl
                        p-6 sm:p-8 md:p-10
                        space-y-5 md:space-y-6
                        shadow-md
                        transition-all duration-500
                    "
                >

                    {/* STATUS MESSAGE */}
                    {status && (
                        <div className={`text-sm rounded-xl px-4 py-3 transition-all duration-500
                            ${status === "success"
                            ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                            : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
                        }`}>
                            {status === "success"
                                ? "Mensagem enviada com sucesso 🚀"
                                : "Erro ao enviar. Tente novamente."}
                        </div>
                    )}

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-slate-300">
                            Seu nome
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            disabled={loading}
                            className="
                                w-full rounded-xl px-4 py-3
                                text-sm sm:text-base
                                bg-white dark:bg-slate-900/40
                                border border-gray-300 dark:border-slate-700
                                text-gray-900 dark:text-white
                                focus:outline-none focus:ring-2 focus:ring-cyan-500
                                disabled:opacity-60
                            "
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-slate-300">
                            Seu email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            disabled={loading}
                            className="
                                w-full rounded-xl px-4 py-3
                                text-sm sm:text-base
                                bg-white dark:bg-slate-900/40
                                border border-gray-300 dark:border-slate-700
                                text-gray-900 dark:text-white
                                focus:outline-none focus:ring-2 focus:ring-cyan-500
                                disabled:opacity-60
                            "
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-slate-300">
                            Assunto
                        </label>
                        <input
                            type="text"
                            name="subject"
                            required
                            disabled={loading}
                            className="
                                w-full rounded-xl px-4 py-3
                                text-sm sm:text-base
                                bg-white dark:bg-slate-900/40
                                border border-gray-300 dark:border-slate-700
                                text-gray-900 dark:text-white
                                focus:outline-none focus:ring-2 focus:ring-cyan-500
                                disabled:opacity-60
                            "
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-slate-300">
                            Mensagem
                        </label>
                        <textarea
                            name="message"
                            rows="4"
                            required
                            disabled={loading}
                            className="
                                w-full rounded-xl px-4 py-3
                                text-sm sm:text-base
                                bg-white dark:bg-slate-900/40
                                border border-gray-300 dark:border-slate-700
                                text-gray-900 dark:text-white
                                resize-none
                                focus:outline-none focus:ring-2 focus:ring-cyan-500
                                disabled:opacity-60
                            "
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            w-full py-3 sm:py-4
                            rounded-xl
                            bg-cyan-600 hover:bg-cyan-500
                            text-white font-medium
                            transition-all duration-300
                            shadow-lg shadow-cyan-600/20
                            disabled:opacity-70
                            flex items-center justify-center gap-2
                        "
                    >
                        {loading ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Enviando...
                            </>
                        ) : (
                            "Enviar mensagem"
                        )}
                    </button>

                </form>

            </div>
        </InfoSection>
    );
}
