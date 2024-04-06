import { useState } from "react";

type QuestionType = {
	question: string;
	questionDescription: string;
	options: string[];
	answer: number[];
	explanation: string;
	answerQuestion: (index: number) => void;
};

export default function Question({
	question,
	questionDescription,
	options,
	explanation,
	answerQuestion,
}: QuestionType) {
	const [isAnswered, setIsAnswered] = useState(false);

	return (
		<>
			<div>
				<h3 className="text-3xl font-bold">{question}</h3>

				<p className="text-lg text-gray-800 mt-2">
					{questionDescription}
				</p>
				<div className="flex flex-col items-start gap-2 w-full mt-6">
					{options.map((optionText, index) => {
						return (
							<button
								key={index}
								onClick={() => answerQuestion(index)}
								className="rounded-md border-2 px-4 py-2 w-full hover:bg-gray-200"
							>
								{optionText}
							</button>
						);
					})}
				</div>

				{isAnswered ? (
					<>
						<p>{explanation}</p>
					</>
				) : null}
			</div>
		</>
	);
}
----------------------------------------------------------------
import { useState } from "react";
import Question from "./components/Question";

type QuestionType = {
	question: string;
	questionDescription: string;
	options: string[];
	answer: number[];
	explanation: string;
};

type QuestionVerdictType = {
	index: number;
	isCorrect: boolean;
};

const quizQuestions: QuestionType[] = [
	{
		question:
			"True or False: JavaScript is a statically-typed programming language.",
		questionDescription:
			"Statically-typed languages require variables to be declared with their data types before they can be used.",
		options: ["True", "False"],
		answer: [1],
		explanation:
			"JavaScript is a dynamically-typed language, which means that variables do not have to be declared with their data types.",
	}
];

export default function StartAttempt() {
	const [questions, setQuestions] =
		useState<Array<QuestionType>>(quizQuestions);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [questionAttemptVerdictArray, setQuestionAttemptVerdictArray] =
		useState<QuestionVerdictType[]>([]);
	function answerQuestion(index: number) {
		if (questions[currentQuestionIndex]?.answer.includes(index)) {
			console.log("true");
			setQuestionAttemptVerdictArray((arr) => [
				...arr,
				{ index: currentQuestionIndex, isCorrect: true },
			]);
		} else {
			console.log("false");
			setQuestionAttemptVerdictArray((arr) => [
				...arr,
				{ index: currentQuestionIndex, isCorrect: false },
			]);
		}

		setCurrentQuestionIndex((idx) => idx + 1);
	}

	console.log(questionAttemptVerdictArray);

	return (
		<>
			{currentQuestionIndex < questions.length ? (
				<>
					<div className="mt-2">
						<p className="text-lg font-semibold text-end px-6">
							Correct Answers:{" "}
							<span data-testid="quiz-answer-counter">
								{questionAttemptVerdictArray.reduce(
									(acc: number, element) =>
										element.isCorrect ? ++acc : acc,
									0
								)}
							</span>{" "}
							/ {questions.length}
						</p>
					</div>

					<div className="mx-5 mt-9">
						<p>Question: {currentQuestionIndex + 1}</p>
						<Question
							{...quizQuestions[currentQuestionIndex]}
							answerQuestion={answerQuestion}
						/>
					</div>
				</>
			) : (
				<>
					<div className="mx-auto w-1/2 text-center mt-24">
						<h3 className="text-2xl">Final Score</h3>
						<p className="text-6xl font-bold">
							<span data-testid="final-answer-counter">
								{questionAttemptVerdictArray.reduce(
									(acc: number, element) =>
										element.isCorrect ? ++acc : acc,
									0
								)}
							</span>{" "}
							/ {questions.length}
						</p>
					</div>
				</>
			)}
		</>
	);
}

