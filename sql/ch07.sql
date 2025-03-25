-- DML : 

SELECT *
FROM 부서;

INSERT INTO 부서
VALUES ('A5', '마케팅부');

INSERT INTO 제품
VALUES(91, '연어피클소스', NULL, 5000, 40);

DESC 제품;

SELECT *
FROM 제품;

DESC 사원;

INSERT INTO 사원(사원번호, 이름, 직위, 성별, 입사일)
VALUES('E20', '김사과','수습사원', '남', CURDATE())
	 ,('E21', '박바나나','수습사원', '여', CURDATE())
     ,('E22', '정오렌지','수습사원', '여', CURDATE());
     
SELECT *
FROM 사원; 

UPDATE 사원
SET 이름 = '김레몬'
WHERE 사원번호 = 'E20';

SELECT * FROM 제품;

UPDATE 제품
SET 포장단위 = '200 ml bottles', 단가 = 5500
WHERE 제품번호 = 91;

DELETE FROM 제품
WHERE 제품번호 = 91;

-- 가장 최근 입사한 3명 지우기
DELETE FROM 사원
ORDER BY 입사일 DESC
LIMIT 3;

INSERT INTO 제품(제품번호, 제품명, 단가, 재고)
VALUES(91, '연어피클핫소스1', 6000, 50)
ON DUPLICATE KEY UPDATE 
제품명 = '연어피클핫소스1', 단가 = 7000, 재고 = 60;

-- 연습문제

-- 1. 제품 테이블에 레코드를 추가하시오.
-- 제품번호: 95, 제품명: 망고베리 아이스크림, 포장단위 : 400g, 단가: 800, 재고: 30
INSERT INTO 제품
VALUES (95, '망고베리 아이스크림', '400g', 800, 30);

-- 2. 제품 테이블에 레코드를 추가하시오.
-- 제품번호: 96, 제품명: 눈꽃빙수맛 아이스크림, 단가: 2000
INSERT INTO 제품 (제품번호, 제품명, 단가)
VALUES (96, '눈꽃빙수맛 아이스크림',2000);

-- 3. 문제2에서 추가한 96번 제품의 재고를 30으로 변경하시오.
UPDATE 제품
SET 재고 = 30
WHERE 제품번호 = 96;

-- 4. 사원이 한 명도 존재하지 않는 부서를 부서 테이블에서 삭제하시오.
DELETE 
FROM 부서
WHERE NOT EXISTS (SELECT * FROM 사원 WHERE 부서번호 = 부서.부서번호) 

-- 실전문제
-- 1. 고객 테이블에서 새로운 레코드를 삽입하시오.
-- 고객번호: ZZZAA, 담당자명: 한동욱, 고객회사명: 자유트레이딩, 도시: 서울특별시
INSERT  INTO 고객 (고객번호, 고객회사명, 담당자명, 도시)
VALUES ('ZZZAA' , '자유트레이딩', '한동욱', '서울특별시');

SELECT * FROM 고객;

-- 2. 1번에서 삽입한 'ZZZAA' 고객의 레코드에 대해 컬럼 값을 다음과 같이 변경하시오.
-- 도시: 부산광역시, 마일리지: 100, 담당자직위: 대표 이사
UPDATE 고객
SET 도시 = '부산광역시', 마일리지 = 100, 담당자직위 = '대표 이사'
WHERE 고객번호 = 'ZZZAA';

-- 3. 1번에서 삽입한 'ZZZAA' 고객의 레코드에 대해 마일리지를 
-- '대표 이사' 직위의 평균 마일리지 값으로 변경하시오.
-- 서브쿼리를 사용해서
UPDATE 고객 AS k
JOIN (SELECT avg(마일리지) AS 평균마일리지
    FROM 고객 
    WHERE 담당자직위 = '대표 이사') AS s
SET k.마일리지 = s.평균마일리지
WHERE 고객번호 = 'ZZZAA';

-- CTE을 사용해서
WITH 대표이사_마일리지 AS (
	SELECT avg(마일리지) AS 평균마일리지
    FROM 고객 
    WHERE 담당자직위 = '대표 이사')
UPDATE 고객
SET 마일리지 = (SELECT 평균마일리지 FROM 대표이사_마일리지)
WHERE 고객번호 = 'ZZZAA'

-- 4. 사원번호 'E15'의 레코드가 없으면 레코드를 새로 삽입하고, 레코드가 있다면 데이터 값을 수정하는 문장을 작성하시오.
-- 사원번호: E15, 이름: 이석진, 직윈: 수습사원
INSERT INTO 사원(사원번호, 이름, 직위)
VALUES('E15', '이석진','수습직원')
ON DUPLICATE KEY UPDATE 
사원번호 = 'E15', 이름 = '이석진', 직위 = '수습사원';

-- 5. 1번에서 삽입한  'ZZZAA' 고객의 레코드를 삭제하시오.
DELETE FROM 고객
WHERE 고객번호 = 'ZZZAA';

-- 6. 4번에서 삽입한 'E15' 사원의 레코드를 삭제하시오.
DELETE FROM 사원
WHERE 사원번호 = 'E15';

SELECT * FROM 사원;
