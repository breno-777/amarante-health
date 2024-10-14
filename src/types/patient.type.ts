export type Patient = {
    id: string
    status: number
    avatar: string
    name: string
    age: number
    phone: string
    address: string
    neighborhood: string
    payments: {
        last_payment: Date
        next_payment: Date
    }
    medical_record: {
        observations: string
        main_complaints: string
        thrombosis: boolean
        pacemaker: boolean
        pregnant: boolean
        diabetic: boolean
        varicose: boolean
        cancer: boolean
        heart_condition: boolean
        blood_pressure: boolean
        smoke: boolean
        painkillers: boolean
        menopause: boolean
        medication: {
            answer: boolean
            details: string
        }
        severe_headache: {
            answer: boolean
            details: string
        }
        autoimmune_disease: {
            answer: boolean
            details: string
        }
        transplanted: {
            answer: boolean
            details: string
        }
        surgical: {
            answer: boolean
            details: string
        }
    }
}