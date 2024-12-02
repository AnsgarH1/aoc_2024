export const puzzle_01 = async(): Promise<number> => {
    const input = await Bun.file("day_02/data.txt").text()
    const lines = input.split("\n")
    const data = lines
    .map(line=>line
        .split(" ")
        .map(Number)
    )

    let validReports = 0;

    data.forEach((report, reportIndex) => {
        let angle: "INC" | "DEC"| undefined;
        let previouseLevel = 0;
        
        let reportIsSafe = true;
        report.forEach((currLevel, levelIndex)=>{
            if(levelIndex === 0){
                previouseLevel = currLevel;
                return; 
            }
            const currAngle = currLevel - previouseLevel;

            if(angle === undefined && currAngle > 0){
                angle = "INC";
            }
            if(angle === undefined && currAngle < 0){
                angle = "DEC"
            }

            if(currAngle > 0 && angle === "DEC"){
                reportIsSafe = false;   
            }

            if(currAngle < 0 && angle == "INC"){
                reportIsSafe = false;
            }     
            
            if(currAngle === 0){
                reportIsSafe = false
            }
            if(Math.abs(currAngle) >= 4){
                reportIsSafe = false;
            }
            previouseLevel = currLevel
            
           
        })

        if(reportIsSafe){
            validReports++
            console.log(`Report #${reportIndex} is safe!`)
        }else{
            console.log(`Report #${reportIndex} is NOT safe!`)
        }
    })

    return validReports
}

//puzzle_01()