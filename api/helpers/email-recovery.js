const transporter = require("nodemailer").createTransport(require("../config/email"))
const { api: link } = require("../config/index")

module.exports = ({ usuario, recovery}, cb) => {
    const message = `
        <h1 style="text-align: center;">Recuperação de Senha</h1>
        <br />
        <P>
            Aqui está o link para redefinir sua senha. Acesse ele e digite sua nova senha:
        </p>
        <a href="${link}/v1/api/usuarios/senha-recuperada?token=${recovery.token}">
            ${link}/v1/api/usuarios/senha-recuperada?token=${recovery.token}
        </a>
        <br /><br /><br />
        <p>
            Obs: Se você não solicitou a redefinição, apenas ignore esse email.
        </p>
        <br />
        <p>Atenciosamente, Loja TI</p>
    `
    ;
    const opcoesEmail = {
        from: "naoresponder@lojati.com",
        to: usuario.email,
        subject: "Redefinicao de Senha - Loja TI",
        html: message
    }

    if( process.env.NODE_ENV === "production"){
        transporter.sendMail(opcoesEmail, (error, info) => {
            if(error){
                console.log(error)
                return cb("Aconteceu um erro no envio do email, tente novamente")
            } else  {
                return cb(null, "Link para redefinição de senha enviado com sucesso para seu email")
            }
        })
    } else{
        console.log(opcoesEmail)
        return cb(null, "Link para redefinição de senha enviado com sucesso para seu email")
    }
    
}