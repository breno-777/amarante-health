export interface IMedicalRecord {
    observations?: string,
    main_complaint?: string,
    has_thrombosis?: boolean,
    has_pacemaker?: boolean,
    is_pregnant?: boolean,
    is_diabetic?: boolean,
    has_varicose_veins?: boolean,
    has_cancer?: boolean,
    has_heart_condition?: boolean,
    has_high_blood_pressure?: boolean,
    smokes?: boolean,
    uses_painkiller?: {
        answer: boolean,
        details: string
    },
    is_in_menopause?: boolean,
    take_medication?: {
        answer: boolean,
        details: string
    },
    have_surgical_procedures?: {
        answer: boolean,
        details: string
    }
}