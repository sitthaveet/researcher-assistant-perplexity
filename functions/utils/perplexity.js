const OpenAI = require('openai');
require('dotenv').config();

const research = async (prompt) => {
  const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${PERPLEXITY_API_KEY}`
    },
    body: JSON.stringify({
      model: 'pplx-7b-online',
      messages: [
        {role: 'system', content: 
        `
        You will be given a keyword from the user. Your task is to provide the user with the latest and most relevant academic research papers or scholarly literature from credible sources in the topic of that keyword. Your response should provide 1-5 papers and include the following information for each paper:
        The title of the paper in quotation marks
        An abstract of the paper
        A website URL to the paper.
        Use bullet points to separate each paper and format the information.
        Then, before send your response, make sure you verify that the links are valid and the content matches the topic and summary.
        If you cannot find any recent or relevant papers, then simply write “No new papers found under my radar."
        `
        },
        {role: 'user', content: prompt}
      ]
    })
  };

  try {
    const response = await fetch('https://api.perplexity.ai/chat/completions', options);
    const data = await response.json();
    console.log(data.choices[0].message.content);
    return data.choices[0].message.content;
  } catch (err) {
    console.error(err);
  }
};

research('CRISPR');

module.exports = { research };
