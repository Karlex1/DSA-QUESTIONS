Select id, Count(*) as num from(
    Select requester_id as id from RequestAccepted
Union All 
Select accepter_id as id from RequestAccepted
) as All_Friends Group by id Order By num Desc Limit 1;


#basic_idea: combine both column of table and count the appearance 
of id in the table so we selected id, count(*)[counts how many total
friendships each person has (whether they were the requester or accepter)] 
