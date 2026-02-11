import InfoSection from "./InfoSection.jsx";

export default function Contact() {
    return (
        <InfoSection id="contato" title="Contato">
            <div className="grid md:grid-cols-2 gap-16 items-start">

                {/* COLUNA ESQUERDA – INFO */}
                <div className="space-y-8">

                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Vamos conversar
                        </h3>

                        <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                            Estou aberto a novas oportunidades, projetos,
                            freelas e colaborações.
                            Se você tem uma ideia ou precisa de ajuda técnica,
                            é só me chamar.
                        </p>
                    </div>

                    <div className="space-y-4 text-lg">

                        <p className="text-gray-700 dark:text-slate-300">
                            <span className="font-medium text-gray-900 dark:text-white">
                                Email:
                            </span>{" "}
                            <a
                                href="mailto:pedro_cardoso@ufrrj.br"
                                className="
                                    text-cyan-500
                                    hover:text-cyan-400
                                    transition
                                "
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

                {/* COLUNA DIREITA – FORM */}
                <form
                    action="mailto:pedro_cardoso@ufrrj.br"
                    method="POST"
                    encType="text/plain"
                    className="
                        border border-gray-200 dark:border-slate-800
                        rounded-3xl
                        bg-white/70 dark:bg-slate-900/60
                        backdrop-blur-xl
                        p-10
                        space-y-6
                    "
                >

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-slate-300">
                            Seu nome
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="
                                w-full
                                rounded-xl
                                px-4 py-3
                                bg-white dark:bg-slate-950
                                border border-gray-300 dark:border-slate-700
                                text-gray-900 dark:text-white
                                focus:outline-none
                                focus:ring-2 focus:ring-cyan-500
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
                            className="
                                w-full
                                rounded-xl
                                px-4 py-3
                                bg-white dark:bg-slate-950
                                border border-gray-300 dark:border-slate-700
                                text-gray-900 dark:text-white
                                focus:outline-none
                                focus:ring-2 focus:ring-cyan-500
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
                            className="
                                w-full
                                rounded-xl
                                px-4 py-3
                                bg-white dark:bg-slate-950
                                border border-gray-300 dark:border-slate-700
                                text-gray-900 dark:text-white
                                focus:outline-none
                                focus:ring-2 focus:ring-cyan-500
                            "
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-slate-300">
                            Mensagem
                        </label>
                        <textarea
                            name="message"
                            rows="5"
                            required
                            className="
                                w-full
                                rounded-xl
                                px-4 py-3
                                bg-white dark:bg-slate-950
                                border border-gray-300 dark:border-slate-700
                                text-gray-900 dark:text-white
                                resize-none
                                focus:outline-none
                                focus:ring-2 focus:ring-cyan-500
                            "
                        />
                    </div>

                    <button
                        type="submit"
                        className="
                            w-full
                            py-4
                            rounded-xl
                            bg-cyan-600
                            hover:bg-cyan-500
                            text-white
                            font-medium
                            transition
                            shadow-lg shadow-cyan-600/20
                        "
                    >
                        Enviar mensagem
                    </button>

                </form>

            </div>
        </InfoSection>
    );
}
