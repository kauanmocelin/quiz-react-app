const URL_API_TRIVIA = 'https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple'

const fetchQuestionsData = async () => {
    const response = await fetch(URL_API_TRIVIA)
    if (!response.ok) {
        const message = `An error has occured: ${response.status} - ${response.statusText}`
        throw new Error(message)
    }
    const questionsData = await response.json()
    return questionsData
}

export default fetchQuestionsData