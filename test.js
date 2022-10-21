let src="https://jsonplaceholder.typicode.com/posts/1";
fetch(src).then((response)=> response.json())
          .then((data)=>{
            console.log(data)
            let article = data;

            let divCount = document.createElement("div");
            divCount.id = "post-count";
            divCount.className = "post-count";

            let count = document.createTextNode("第 "+data.id+" 篇文章");

            let divTitle = document.createElement("div");
            divTitle.id = "title";
            divTitle.className = "title";

            let titleLine = document.createTextNode("文章標題: "+article.title);

            let divText = document.createElement("div");
            divText.id = "text";
            divText.className = "text";

            let text =document.createTextNode("內容: "+data.body);
        
            divText.appendChild(text);
            divTitle.appendChild(titleLine);
            divCount.appendChild(count);

            document.getElementById("post").appendChild(divCount);
            document.getElementById("post").appendChild(divTitle);
            document.getElementById("post").appendChild(divText);
        })

let src1="https://jsonplaceholder.typicode.com/comments";
fetch(src1).then((response)=>response.json())
           .then((data1)=>{
            console.log(data1)
            let comments = data1;

            for (let i=0,j=1;i<=10,j<=10;i++,j++){
                let newDiv = document.createElement("div");
                    newDiv.id = "box1-"+j;
                    newDiv.className = "box1";
                document.getElementById("section2").appendChild(newDiv);
            }

            function handler(){
                console.log('DOM fully loaded')
            }

            for (let i=0,j=1;i<=10,j<=10;i++,j++){
                let div1 = document.createElement("div");
                    div1.id = "comment-count";
                    div1.className = "comment-count";

                    let div2 = document.createElement("div");
                    div2.id = "user-name";
                    div2.className = "user-name";

                    let div3 = document.createElement("div");
                    div3.id = "email";
                    div3.className = "email";

                    let div4 = document.createElement("div");
                    div4.id = "comment";
                    div4.className = "comment";

            }

})