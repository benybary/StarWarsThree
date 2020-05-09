import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<!-- Footer -->
  <footer class="page-footer font-large fixed-bottom">
  
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">Beny's Fullstack services © 2020 Copyright:
      <a href="https://www.linkedin.com/in/beny-bary-8bb79369//"> LinkdIn</a>
    </div>
    <!-- Copyright -->
  
  </footer>
  <!-- Footer -->`,
  styles: [`
    background-color: #feda4a;
    text-align: center;
    position: relative;
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}