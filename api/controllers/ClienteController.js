const mongoose = require("mongoose")

const Cliente = mongoose.model("Cliente")
const Usuario = mongoose.model("Usuario")

class ClienteController {

    ////admin

    //get / index
    async index(req, res, next) {
        try {
            const offset = Number(req.query.offset) || 0;
            const limit = Number(req.query.limit) || 30;
            const clientes = await Cliente.paginate(
                { loja: req.query.loja },
                { offset, limit, populate: { path: "usuario", select: "-salt -hash" } }

            );
            return res.send({ clientes });
        } catch (e) {
            next(e)
        }
    }
    //get /search/:search/pedidos
    searchPedidos(req, res, next) {
        return res.status(400).send({ error: "Em desenvolvimento" })
    }
    //get /search/:search
    async search(req, res, next) {
        const offset = Number(req.query.offset) || 0;
        const limit = Number(req.query.limit) || 30;
        const search = new RegExp(req.params.search, "i");
        try {
            const clientes = await Cliente.paginate(
                {
                    loja: req.query.loja,
                    $or: [
                        { nome: { $regex: search } },
                        { telefones: { $regex: search } }
                    ]
                },
                { offset, limit, populate: { path: "usuario", select: "-salt -hash" } }
            );
            return res.send({ clientes });
        } catch (e) {
            next(e);
        }
    }

    //get admin/:id
    async showAdmin(req, res, next) {
        try {
            const cliente = await (await Cliente.findOne({ _id: req.params.id, loja: req.query.loja })).populate({ path: "usuario", select: "-salt -hash" })
            return res.send({ cliente })
        } catch (e) {
            next(e)
        }
    }
    //get /admin/:id/pedidos
    showPedidosCliente(req, res, next) {
        return res.status(400).send({ error: "Em desenvolvimento" })
    }

    //put admin/:id

    async updateAdmin(req, res, next) {
        const { nome, cpf, email, telefones, endereco, dataDeNascimento } = req.body;
        try {
            const cliente = await Cliente.findById(req.params.id).populate({ path: "usuario", select: "-salt -hash" })
            if (nome) {
                cliente.usuario.nome = nome;
                cliente.nome = nome
            }
            if (email) cliente.usuario.email = email;
            if (cpf) cliente.usuario.cpf = cpf;
            if (telefones) cliente.telefones = telefone;
            if (endereco) cliente.endereco = endereco;
            if (dataDeNascimento) cliente.dataDeNascimento = dataDeNascimento;
            await cliente.usuario.save()
            await cliente.save();
            return res.send({ cliente });
        } catch (e) {
            next(e)
        }

    }

    async removeAdmin(req, res, next) {
        try {
            const cliente = await Cliente.findById(req.params.id).populate({ path: "usuario", select: "-salt -hash" });
            if (!cliente) return res.status(400).send({ error: "Cliente nao encontrado." })
            await cliente.usuario.remove();
            await cliente.remove();
            return res.send({ deletado: true });
        } catch (e) {
            next(e);
        }
    }
    //////cliente
    async show(req, res, next) {
        try {
            const cliente = await Cliente.findOne({ usuario: req.payload.id, loja: req.query.loja }).populate({ path: "usuario", select: "-salt -hash" });
            return res.send({ cliente });
        } catch (e) {
            next(e)
        }

    }


    async store(req, res, next) {
        const { nome, email, cpf, telefones, endereco, dataDeNascimento, password } = req.body;
        const { loja } = req.query;

        const usuario = new Usuario({ nome, email, loja })
        usuario.setSenha(password);
        const cliente = new Cliente({ nome, cpf, telefones, endereco, loja, dataDeNascimento, usuario: usuario._id })



        try {
            await usuario.save();
            await cliente.save();

            return res.send({ cliente: Object.assign({}, cliente._doc, { email: usuario.email }) });
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        const { nome, email, cpf, telefones, endereco, dataDeNascimento, password } = req.body;
        try {
            const cliente = await Cliente.findOne({ usuario: req.payload.id }).populate({ path: "usuario", select: "-salt -hash" })
            if (!cliente) return res.send({ error: "Cliente não existe" })
            if (nome) {
                cliente.usuario.nome = nome;
                cliente.nome = nome;

            }
            if (email) cliente.usuario.email = email;
            if (password) cliente.usuario.setSenha(password)
            if (cpf) cliente.cpf = cpf;
            if (telefones) cliente.telefones = telefones;
            if (endereco) cliente.endereco = endereco;
            if (dataDeNascimento) cliente.dataDeNascimento = dataDeNascimento;
            await cliente.save();
            cliente.usuario = {
                email: cliente.usuario.email,
                _id: cliente.usuario._id,
                permissao: cliente.usuario.permissao
            }
            return res.send({ cliente})

        } catch (e) {
            next(e);
        }
    }

    async remove(req,res,next){
        try {
            const cliente = await Cliente.findOne({ usuario: req.payload.id }).populate("usuario");
            await cliente.usuario.remove();
            cliente.deletado = true;
            await cliente.save();
            return res.send({ deletado: true });
        }catch(e){
            next(e);
        }
    }


}

module.exports = ClienteController;