import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { QuestionComponent } from './components/question/question.component';
import { QuizService } from './services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  standalone: true,
  imports: [QuestionComponent],
})
export class QuizComponent implements OnInit {
  quizService = inject(QuizService);

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe((questions) => {
      this.quizService.questions.set(questions);
    });
  }
}
