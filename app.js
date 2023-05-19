function sortingBooksByLetterU(...books) {
    const booksWithU = []
    const booksWithOutU = []
    for (let i = 0; i < books.length; i++) {
        if (books[i].indexOf('У') !== -1) {
            booksWithU.push(books[i])
        } else {
            booksWithOutU.push(books[i])
        }
    }
    console.log('Книги с буквой "У" ', booksWithU)
    console.log('Книги без буквы "У" ', booksWithOutU)
}
sortingBooksByLetterU('Улитка на склоне', 'Ужин', 'Простоквашино', 'Учитель','НеССЫ', 'Война и Мир', 'У деревьев есть глаза')

const getAverage = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const length = numbers.length;
    return sum / length;
};

const numbers = [1, 2, 3, 4];
console.log(getAverage(numbers));