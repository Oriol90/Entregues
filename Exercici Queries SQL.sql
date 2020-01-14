1. 
select count(*) from flights

2. 
select origin, avg(ArrDelay) as prom_arrivades, avg(DepDelay) as prom_sortides 
from flights
group by origin

3. 
select origin, colYear, colMonth, avg(ArrDelay) as prom_arrivades from flights
group by origin,colYear,colMonth

4.
select u.city, f.colYear, f.colMonth, avg(f.ArrDelay) as prom_arrivades
from usairports u JOIN flights f WHERE u.IATA = f.Origin
group by origin,colYear,colMonth
order by city

5.
select uniqueCarrier, colYear, colMonth, SUM(Cancelled) as total_cancelled from flights
group by uniqueCarrier,colYear,colMonth
order by total_cancelled desc

6.
SELECT tailNum, SUM(distance) as totalDistance  FROM flights
where TailNum != ''
group by TailNum
order by totalDistance desc
LIMIT 10

7.
select UniqueCarrier, AVG(ArrDelay) as avgDelay from flights
group by UniqueCarrier
HAVING AVG(ArrDelay) > 10
order by avgDelay desc