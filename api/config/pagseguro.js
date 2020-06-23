module.exports = {
    mode: process.env.NODE_ENV === 'production' ? "live" : 'sandbox',
    sandbox: process.env.NODE_ENV === 'production' ? false : true,
    sandbox_email: process.env.NODE_ENV === 'production' ? null : 'c43452522542774085026@sandbox.pagseguro.com.br',
    email: 'js75819@gmail.com',
    token: '8FE09660563C428C8A360EDF766859DD',
    notificationURL: "https://api.loja-teste.ampliee.com/v1/api/pagamentos/notificacao",
}