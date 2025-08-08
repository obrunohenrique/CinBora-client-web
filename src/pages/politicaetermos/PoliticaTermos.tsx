import Header from "../../components/header/Header";

const TermsAndPrivacy = () => {
    return (
        <>
            <Header />

            <div className="terms-container">
                <h1 className="terms-title">Termos de Uso - <span className="app-name">CInBora</span></h1>
                <p className="terms-update"><strong>Última atualização:</strong> [data]</p>

                <h2 className="terms-subtitle">1. Aceitação dos Termos</h2>
                <p className="terms-text">
                    Ao acessar ou utilizar o aplicativo <strong>CInBora</strong>, você concorda em cumprir os presentes Termos de Uso.
                    Caso não concorde com alguma parte destes termos, não utilize o serviço.
                </p>

                <h2 className="terms-subtitle">2. Objetivo do Serviço</h2>
                <p className="terms-text">
                    O <strong>CInBora</strong> tem como objetivo facilitar a organização de caronas entre estudantes, professores e funcionários do centro universitário.
                    O aplicativo conecta usuários que desejam oferecer ou buscar caronas, promovendo a mobilidade sustentável e a colaboração dentro da comunidade acadêmica.
                </p>

                <h2 className="terms-subtitle">3. Cadastro de Usuário</h2>
                <p className="terms-text">
                    Para utilizar o aplicativo, o usuário deve se cadastrar com um endereço de e-mail institucional válido ou outro dado que comprove a vinculação ao centro universitário.
                    O cadastro é pessoal e intransferível, sendo o usuário responsável pelas informações fornecidas.
                </p>

                <h2 className="terms-subtitle">4. Responsabilidades do Usuário</h2>
                <ul className="terms-list">
                    <li><strong>Cadastro de Dados:</strong> O usuário se compromete a fornecer informações verdadeiras e atualizadas ao realizar o cadastro.</li>
                    <li><strong>Condução da Carona:</strong> O motorista é responsável por garantir que o veículo esteja em boas condições de uso e siga todas as normas de segurança e trânsito.</li>
                    <li><strong>Pontualidade e Responsabilidade:</strong> Ambas as partes (motorista e carona) devem respeitar os horários e compromissos acordados, sendo responsáveis pela pontualidade.</li>
                    <li><strong>Respeito e Comportamento:</strong> Espera-se que todos os usuários se comportem de forma respeitosa e educada, mantendo um ambiente seguro e cordial para todos.</li>
                </ul>

                <h2 className="terms-subtitle">5. Uso Proibido</h2>
                <p className="terms-text">
                    O uso do <strong>CInBora</strong> é proibido para:
                    <ul className="terms-list">
                        <li>Transporte de bens ou cargas de forma remunerada.</li>
                        <li>Práticas ilegais, imorais ou que violem os direitos de outros usuários.</li>
                        <li>Atos discriminatórios, ofensivos ou que possam prejudicar outros membros da comunidade universitária.</li>
                    </ul>
                </p>

                <h2 className="terms-subtitle">6. Limitação de Responsabilidade</h2>
                <p className="terms-text">
                    O <strong>CInBora</strong> atua apenas como facilitador da comunicação entre motoristas e passageiros. Não nos responsabilizamos por:
                    <ul className="terms-list">
                        <li>A segurança, qualidade ou condições dos veículos.</li>
                        <li>Comportamento inadequado entre os usuários.</li>
                        <li>Incidentes ou danos que possam ocorrer durante a execução das caronas.</li>
                    </ul>
                </p>

                <h2 className="terms-subtitle">7. Privacidade e Proteção de Dados</h2>
                <p className="terms-text">
                    Coletamos informações pessoais (como nome, e-mail, matrícula, etc.) para fins de cadastro e uso do aplicativo. Essas informações são protegidas conforme a legislação vigente sobre proteção de dados pessoais.
                </p>
                <ul className="terms-list">
                    <li><strong>Coleta de Dados:</strong> O <strong>CInBora</strong> pode coletar informações como localização, histórico de viagens e dados de comunicação entre os usuários.</li>
                    <li><strong>Uso de Dados:</strong> Seus dados serão usados para oferecer e melhorar o serviço de caronas, mas não serão compartilhados com terceiros sem sua permissão, exceto em casos previstos por lei.</li>
                </ul>

                <h2 className="terms-subtitle">8. Alterações no Serviço e Termos de Uso</h2>
                <p className="terms-text">
                    O <strong>CInBora</strong> reserva-se o direito de modificar ou encerrar o serviço a qualquer momento, sem aviso prévio.
                    Alterações significativas nos Termos de Uso serão comunicadas aos usuários, sendo sua aceitação necessária para a continuidade do uso do aplicativo.
                </p>

                <h2 className="terms-subtitle">9. Suspensão ou Encerramento de Conta</h2>
                <p className="terms-text">
                    O <strong>CInBora</strong> pode suspender ou encerrar o acesso do usuário ao aplicativo, caso:
                    <ul className="terms-list">
                        <li>Seja identificado o uso inadequado ou violação destes Termos de Uso.</li>
                        <li>O usuário forneça informações falsas ou esteja envolvido em práticas fraudulentas.</li>
                        <li>A conta do usuário não for utilizada por um período significativo de tempo.</li>
                    </ul>
                </p>

                <h2 className="terms-subtitle">10. Propriedade Intelectual</h2>
                <p className="terms-text">
                    O <strong>CInBora</strong> é propriedade intelectual da [Nome da Empresa/Organização]. Todos os direitos relacionados ao design, conteúdo e funcionalidade do aplicativo são reservados, e qualquer reprodução ou distribuição não autorizada é proibida.
                </p>

                <h2 className="terms-subtitle">11. Resolução de Conflitos</h2>
                <p className="terms-text">
                    Qualquer disputa relacionada a esses Termos de Uso será resolvida de acordo com as leis brasileiras. Caso não seja possível uma solução amigável, as partes concordam em submeter-se ao foro da comarca de [cidade/estado].
                </p>

                <h2 className="terms-subtitle">12. Contato</h2>
                <p className="terms-text">
                    Caso tenha dúvidas ou precise de mais informações sobre os Termos de Uso, entre em contato conosco através do e-mail: <a href="mailto:mnr2@cin.ufpe.br" className="terms-link">mnr2@cin.ufpe.br</a>.
                </p>

                <hr className="terms-divider" />

                <h1 className="terms-title">Política de Privacidade - <span className="app-name">CInBora</span></h1>
                <p className="terms-update"><strong>Última atualização:</strong> [data]</p>

                <h2 className="terms-subtitle">1. Informações Coletadas</h2>
                <p className="terms-text">
                    Coletamos informações quando você se cadastra ou interage com o aplicativo, incluindo:
                    <ul className="terms-list">
                        <li><strong>Informações de Identificação Pessoal:</strong> Nome, e-mail, matrícula e outras informações fornecidas no cadastro.</li>
                        <li><strong>Informações de Localização:</strong> Para facilitar o processo de busca e oferta de caronas.</li>
                        <li><strong>Informações de Uso:</strong> Dados sobre como você utiliza o aplicativo, como histórico de viagens, avaliações e preferências.</li>
                    </ul>
                </p>

                <h2 className="terms-subtitle">2. Uso das Informações</h2>
                <p className="terms-text">
                    Usamos suas informações para:
                    <ul className="terms-list">
                        <li>Facilitar o oferecimento e solicitação de caronas.</li>
                        <li>Melhorar a experiência do usuário e fornecer suporte.</li>
                        <li>Enviar atualizações sobre novos recursos, promoções e outros comunicados importantes relacionados ao aplicativo.</li>
                    </ul>
                </p>

                <h2 className="terms-subtitle">3. Compartilhamento de Informações</h2>
                <p className="terms-text">
                    Não compartilhamos suas informações pessoais com terceiros, exceto em situações especiais, como:
                    <ul className="terms-list">
                        <li>Quando necessário para cumprir obrigações legais.</li>
                        <li>Para melhorar os serviços, com fornecedores ou parceiros contratados que respeitem esta Política de Privacidade.</li>
                    </ul>
                </p>

                <h2 className="terms-subtitle">4. Segurança dos Dados</h2>
                <p className="terms-text">
                    Empregamos medidas de segurança para proteger seus dados pessoais contra acesso não autorizado, perda ou uso indevido.
                    No entanto, nenhum sistema é completamente seguro, e não podemos garantir a total segurança das suas informações.
                </p>

                <h2 className="terms-subtitle">5. Direitos do Usuário</h2>
                <p className="terms-text">
                    Você tem o direito de:
                    <ul className="terms-list">
                        <li>Acessar, corrigir ou excluir suas informações pessoais a qualquer momento.</li>
                        <li>Retirar seu consentimento para o uso de seus dados, com exceção das informações necessárias para a execução do serviço.</li>
                    </ul>
                </p>

                <h2 className="terms-subtitle">6. Alterações na Política de Privacidade</h2>
                <p className="terms-text">
                    Podemos atualizar esta Política de Privacidade de tempos em tempos. Recomendamos que você consulte regularmente esta página para estar ciente de qualquer modificação.
                </p>

                <h2 className="terms-subtitle">7. Contato</h2>
                <p className="terms-text">
                    Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: <a href="mailto:mnr2@cin.ufpe.br" className="terms-link">mnr2@cin.ufpe.br</a>.
                </p>
            </div>
        </>
    );
};

export default TermsAndPrivacy;
