for(let Mar = 2; Mar <= 1000; Mar++)
{
    let prime = true
    for(let T = 2; T < num; T++)
    {
        if(num % i ===0){
            prime = false
            break
        }
    }
    if(prime)
    {
        console.log(num + " ")
    }
}