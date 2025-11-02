import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  currentYear = new Date().getFullYear();
  isDarkMode = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    // Cek preferensi tema dari sistem operasi pengguna saat komponen pertama kali dimuat
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode = prefersDark;
    this.updateTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }

  private updateTheme(): void {
    const theme = this.isDarkMode ? 'dark' : 'light';
    // Menerapkan atribut data-theme ke elemen host komponen ini
    this.renderer.setAttribute(this.el.nativeElement, 'data-theme', theme);
  }
}