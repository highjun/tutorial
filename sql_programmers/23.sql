SELECT I.ANIMAL_ID, I.ANIMAL_TYPE, I.NAME
FROM ANIMAL_INS as I
INNER JOIN ANIMAL_OUTS as O
ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE O.SEX_UPON_OUTCOME IN ('Spayed Male', 'Spayed Female', 'Neutered Male', 'Neutered Female')
    AND I.SEX_UPON_INTAKE IN ('Intact Male', 'Intact Female')
ORDER BY I.ANIMAL_ID;