import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("saveQuestion", () => {
  it('will return all data',async ()=>{
    const optionOneText=  'optionOne';
    const optionTwoText = 'optionTwo';
    const author = 'author';

    const saveQuestion = await _saveQuestion({optionOneText, optionTwoText, author})
    expect(saveQuestion.author).toEqual(author);
    expect(saveQuestion.optionOne.text).toEqual(optionOneText);
    expect(saveQuestion.optionTwo.text).toEqual(optionTwoText);
  })

  it('will return error', async () => {
    const optionOneText=  'optionOne';
    const author = 'author';
    await expect(_saveQuestion({optionOneText, author})).rejects.toEqual("Please provide optionOneText, optionTwoText, and author")
  })
})

describe('saveQuestionAnswer', () => {
  it('will return true', async ()=> {
    const qid = "8xf0y6ziyjabvozdd253nd";
    const authedUser = "sarahedo";
    const answer = 'optionOne';
    await expect(_saveQuestionAnswer({ authedUser, qid, answer})).resolves.toEqual(true);
  })
  it('will error', async ()=> {
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = 'optionOne';
    await expect(_saveQuestionAnswer({ qid, answer})).rejects.toEqual("Please provide authedUser, qid, and answer");
  })
})