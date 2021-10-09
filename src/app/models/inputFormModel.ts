
    export interface Option {
        label: string;
        value: string;
    }

    export interface Parameter {
        name: string;
        key: string;
        field_type: string;
        options: Option[];
    }

    export interface Group {
        name: string;
        parameters: Parameter[];
    }

    export interface Section {
        name: string;
        group: Group[];
    }

    export interface JsonFormData {
        section: Section[];
    }

