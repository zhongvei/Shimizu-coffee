

CREATE TABLE beantype (
    id SERIAL PRIMARY KEY, 
    bean TEXT NOT NULL, 
    shop TEXT NOT NULL ,
    origin TEXT,
    flavour1 TEXT NOT NULL, 
    flavour2 TEXT NOT NULL, 
    flavour3 TEXT NOT NULL, 
    WaterTemp NUMERIC,
    WaterVol NUMERIC
);





