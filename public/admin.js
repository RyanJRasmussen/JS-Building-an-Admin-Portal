async function main(){

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    //creating array of book titles, ids and quantities

    let bookTitles = books.map(x => x.title)
    let bookIDs = books.map(x => x.id)
    let bookQuant = books.map(x => (x.quantity))
    
    //creating DOM elements
    // lots of DOM elements...

    let root = document.querySelector('#root')
    console.log(root)
    let list = document.createElement('ul')
    list.style.listStyle = 'none'


    for(let i = 0; i < bookTitles.length; i++){

        let listItem = document.createElement('li')
        listItem.textContent = bookTitles[i]

        let form = document.createElement('form')
        let label = document.createElement('label')
        let input = document.createElement('input')
        label.setAttribute("for", "bookCount")
        input.setAttribute("type", "text")
        input.setAttribute("name", "bookCount")
        input.setAttribute("id", String(bookIDs[i]))
        input.setAttribute("value", String(bookQuant[i]))


            
        let button = document.createElement('input')
        button.setAttribute("type", "Submit")
        button.setAttribute("value", "Save")
        button.setAttribute("id", "button" + String(bookIDs[i]))



        form.append(label)
        form.append(input)
        form.append(button)
        listItem.append(form)
        list.appendChild(listItem)
        list.append(form)
        root.appendChild(list)

        button.addEventListener('click', async function(){
            await fetch('http://localhost:3001/updateBook',
            {method: 'PATCH', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({"id": i += 1, "quantity": input.value})
            })
        
            let updatedBook = await response.json()
            let bookCount = updatedBook.quantity
            console.log(bookCount)
        })
    }
console.log(root)
}
main()











