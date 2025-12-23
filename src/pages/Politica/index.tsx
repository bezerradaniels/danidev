import PageHero from '../../components/layout/PageHero.tsx'

export default function PoliticaPage() {
  return (
    <>
      <PageHero 
        title="Política de Privacidade" 
        subtitle="Termos legais"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose prose-slate max-w-none">
            <h2>1. Informações que coletamos</h2>
            <p>
              Coletamos informações que você nos fornece diretamente, como nome, email, telefone e mensagens enviadas através do formulário de contato.
            </p>

            <h2>2. Como usamos suas informações</h2>
            <p>
              Utilizamos suas informações para responder às suas solicitações, enviar propostas comerciais e melhorar nossos serviços. Não compartilhamos seus dados com terceiros sem seu consentimento.
            </p>

            <h2>3. Proteção de dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração ou destruição.
            </p>

            <h2>4. Cookies</h2>
            <p>
              Nosso site pode utilizar cookies para melhorar sua experiência de navegação. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades.
            </p>

            <h2>5. Seus direitos</h2>
            <p>
              Você tem direito de acessar, corrigir ou excluir seus dados pessoais. Para exercer esses direitos, entre em contato conosco através do formulário de contato.
            </p>

            <h2>6. Alterações nesta política</h2>
            <p>
              Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como protegemos suas informações.
            </p>

            <h2>7. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco pelo WhatsApp (77) 99211-6008 ou através do formulário de contato.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
