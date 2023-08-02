declare namespace Express {
    export interface Request {
        user: {
            name: string
            last_name: string
            email: string
            password: string
            phone: string
            active: boolean
            creatAt: date
            updateAt: date
        }
    }
}