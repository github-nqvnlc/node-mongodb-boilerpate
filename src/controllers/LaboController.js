const Labo = require('../models/Labo');

class LaboController {
    async createLabo(req, res) {
        try {
            const validationSchema = z.object({
                fullName: z.string().min(3).max(50),
                codeNo: z.string().min(3).max(50),
                clinic: z.string().min(3).max(50),
                validTo: z.date(),
                labo: z.string().min(3).max(50),
                quantity: z.number(),
                position: z.string().min(3).max(50),
                restorationType: z.string().min(3).max(50),
                origin: z.string().min(3).max(50),
                toothColor: z.string().min(3).max(50),
            });

            const {
                fullName,
                codeNo,
                clinic,
                validTo,
                laboName,
                quantity,
                position,
                restorationType,
                origin,
                toothColor,
            } = validationSchema.parse(req.body);

            const doesExist = await Labo.findOne(
                { codeNo: req.body.codeNo },
                { codeNo: 1 },
            );
            if (doesExist)
                return Utilities.apiResponse(
                    res,
                    422,
                    'Code No is already been registered',
                );

            const labo = new Labo({
                fullName,
                codeNo,
                clinic,
                validTo,
                laboName,
                quantity,
                position,
                restorationType,
                origin,
                toothColor,
            });
            await labo.save();

            return Utilities.apiResponse(
                res,
                200,
                'Labo Created Successfully!',
            );
        } catch (error) {
            return Utilities.apiResponse(res, 500, error);
        }
    }

    async getLabo(req, res) {
        try {
            const labo = await Labo.findOne(
                { _id: req.params.laboId },
                { codeNo: 1, fullName: 1 },
            );
            return Utilities.apiResponse(
                res,
                200,
                'Get Labo Successfully',
                labo,
            );
        } catch (error) {
            return Utilities.apiResponse(res, 500, error);
        }
    }

    async getLabos(req, res) {
        try {
            const options = {
                page: req.query?.page || 1,
                limit: req.query?.limit || 10,
                select: 'fullName codeNo',
            };
            const labos = await Labo.paginate({}, options);
            return Utilities.apiResponse(
                res,
                200,
                'Get Labos Successfully',
                labos,
            );
        } catch (error) {
            return Utilities.apiResponse(res, 500, error);
        }
    }

    async updateLabo(req, res) {
        try {
            const validattionSchema = z.object({
                fullName: z.string().min(3).max(50),
                codeNo: z.string().min(3).max(50),
                clinic: z.string().min(3).max(50),
                validTo: z.date(),
                labo: z.string().min(3).max(50),
                quantity: z.number(),
                position: z.string().min(3).max(50),
                restorationType: z.string().min(3).max(50),
                origin: z.string().min(3).max(50),
                toothColor: z.string().min(3).max(50),
            });

            const {
                fullName,
                codeNo,
                clinic,
                validTo,
                labo,
                quantity,
                position,
                restorationType,
                origin,
                toothColor,
            } = validattionSchema.parse(req.body);

            const doesExist = await Labo.findOne(
                { codeNo: req.body.codeNo },
                { codeNo: 1 },
            );
            if (!doesExist)
                return Utilities.apiResponse(
                    res,
                    422,
                    'Code No is not registered',
                );

            await Labo.updateOne(
                { codeNo: req.body.codeNo },
                {
                    fullName,
                    codeNo,
                    clinic,
                    validTo,
                    labo,
                    quantity,
                    position,
                    restorationType,
                    origin,
                    toothColor,
                },
            );
            return Utilities.apiResponse(
                res,
                200,
                'Labo Updated Successfully!',
            );
        } catch (error) {
            return Utilities.apiResponse(res, 500, error);
        }
    }

    async deleteLabo(req, res) {
        try {
            const doesExist = await Labo.findOne(
                { codeNo: req.body.codeNo },
                { codeNo: 1 },
            );
            if (!doesExist)
                return Utilities.apiResponse(
                    res,
                    422,
                    'Code No is not registered',
                );

            await Labo.deleteOne({ codeNo: req.body.codeNo });
            return Utilities.apiResponse(
                res,
                200,
                'Labo Deleted Successfully!',
            );
        } catch (error) {
            return Utilities.apiResponse(res, 500, error);
        }
    }

    async getLaboByCodeNo(req, res) {
        try {
            const labo = await Labo.findOne(
                { codeNo: req.params.codeNo },
                { codeNo: 1, fullName: 1 },
            );
            return Utilities.apiResponse(
                res,
                200,
                'Get Labo Successfully',
                labo,
            );
        } catch (error) {
            return Utilities.apiResponse(res, 500, error);
        }
    }

    async getLaboByClinic(req, res) {
        try {
            const labo = await Labo.findOne(
                { clinic: req.params.clinic },
                { codeNo: 1, fullName: 1 },
            );
            return Utilities.apiResponse(
                res,
                200,
                'Get Labo Successfully',
                labo,
            );
        } catch (error) {
            return Utilities.apiResponse(res, 500, error);
        }
    }

    async getLaboByLaboName(req, res) {
        try {
            const labo = await Labo.findOne(
                { laboName: req.params.laboName },
                { codeNo: 1, fullName: 1 },
            );
            return Utilities.apiResponse(
                res,
                200,
                'Get Labo Successfully',
                labo,
            );
        } catch (error) {
            return Utilities.apiResponse(res, 500, error);
        }
    }

    async getLaboByPosition(req, res) {
        try {
            const labo = await Labo.findOne(
                { position: req.params.position },
                { codeNo: 1, fullName: 1 },
            );
            return Utilities.apiResponse(
                res,
                200,
                'Get Labo Successfully',
                labo,
            );
        } catch (error) {
            return Utilities.apiResponse(res, 500, error);
        }
    }

    async getLaboByFullname(req, res) {
        try {
            const labo = await Labo.findOne(
                { fullName: req.params.fullName },
                { codeNo: 1, fullName: 1 },
            );
            return Utilities.apiResponse(
                res,
                200,
                'Get Labo Successfully',
                labo,
            );
        } catch (error) {
            return Utilities.apiResponse(res, 500, error);
        }
    }
}

module.exports = new LaboController();