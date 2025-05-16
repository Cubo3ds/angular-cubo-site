

export interface SkillDeveloperCvInterface{
    nameSkill:'programación' | 'bases de datos' | 'frameworks';
    skill:SkillDeveloper[];
}

export interface SkillDeveloper{
    name:string;
    porcentaje:string;
}

