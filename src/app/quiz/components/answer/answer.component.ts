import { Component, inject } from "@angular/core";
import { QuizService } from "../../services/quiz.service";

@Component({
  selector: "quiz-answer",
  templateUrl: "./answer.component.html",
  styleUrl: "./answer.component.css",
  standalone: true,
})
export class AnswerComponent {
  quizService = inject(QuizService);
}
