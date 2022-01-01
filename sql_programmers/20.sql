SELECT O.ANIMAL_ID, O.NAME
FROM ANIMAL_OUTS as O
WHERE O.ANIMAL_ID NOT IN (SELECT ANIMAL_ID from ANIMAL_INS)
ORDER BY O.ANIMAL_ID;