const uuid = require('uuid');
const path = require('path');
const {
    Product,
    ProductInfo
} = require('../models/models');
const ApiError = require('../errors/ApiError');
class ProductController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body;
            const { galary } = req.files;
            const fileNames = [];
            // let fileName = uuid.v4() + ".jpg";
            // img.mv(path.resolve(__dirname, '..', 'static', fileName));
            // console.log(fileName);
            galary.forEach((img) => {
                const fileName = uuid.v4() + ".jpg";
                img.mv(path.resolve(__dirname, '..', 'static', fileName));
                fileNames.push(fileName);
            });
            console.log(req.files);
            const product = await Product.create({ name, price, brandId, typeId, galary: fileNames });

            if (info) {
                info = JSON.parse(info);
                info.forEach(i => {
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id,
                    })
                })
            }


            return res.json(product);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let { limit, page } = req.query;
        let offset = 0;
        let product;

        if (limit && page) {
            offset = page * limit - limit;
            product = await Product.findAll({ limit, offset });
        } else {
            product = await Product.findAll();
        }

        return res.json(product);
    }

    async getOne(req, res) {
        const {
            id
        } = req.params;
        const product = await Product.findOne({
            where: { id },
            include: [{
                model: ProductInfo,
                as: 'info'
            }]
        })
        return res.json(product)
    }
}

module.exports = new ProductController();