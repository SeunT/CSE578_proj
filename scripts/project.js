
document.addEventListener('DOMContentLoaded', function () 
{
    Promise.all([d3.csv('data/mc1-reports-data.xlsx')])
    .then(function(value){

        svg = d3.select('#BoxPlot');
        width = +svg.style('width').replace('px','');
        height = +svg.style('height').replace('px','');
      
   
       innerWidth = width - margin.left - margin.right;
       innerHeight = height - margin.top - margin.bottom;
 
        val = value[0]
       

        //change data from strings to digits
        mort.forEach(d => {
            console.log(d)
            for(var key in d) {
            if(key != 'country' && key != 'geo' && key != 'color') {
                d[key] = +d[key]
                if(d[key] > max_mort)
                {
                    max_mort = d[key]
                }
            } 
            }})
        


   


        })
       
});
