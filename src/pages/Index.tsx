import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const features = [
    {
      icon: 'BookOpen',
      title: 'Индивидуальный подход',
      description: 'Персональные программы обучения под каждого ученика'
    },
    {
      icon: 'Calendar',
      title: 'Гибкое расписание',
      description: 'Занятия в удобное для вас время, включая выходные'
    },
    {
      icon: 'Award',
      title: 'Опытные преподаватели',
      description: 'Команда профессионалов с многолетним опытом'
    },
    {
      icon: 'Target',
      title: 'Результативность',
      description: 'Гарантированное улучшение успеваемости'
    }
  ];

  const subjects = [
    { name: 'Математика', color: 'bg-blue-500' },
    { name: 'Физика', color: 'bg-green-500' },
    { name: 'Химия', color: 'bg-purple-500' },
    { name: 'Английский', color: 'bg-orange-500' },
    { name: 'Русский язык', color: 'bg-red-500' },
    { name: 'История', color: 'bg-indigo-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">EduCenter</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Главная</a>
              <a href="#schedule" className="text-gray-600 hover:text-gray-900 transition-colors">Расписание</a>
              <a href="#subjects" className="text-gray-600 hover:text-gray-900 transition-colors">Предметы</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Контакты</a>
            </nav>
            <Button>Записаться</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Репетиторство
              <span className="block text-primary">нового уровня</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Индивидуальные занятия с лучшими преподавателями. 
              Современные методики и персональный подход к каждому ученику.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на урок
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="schedule" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Выберите удобное время</h3>
            <p className="text-lg text-gray-600">Запишитесь на занятие в несколько кликов</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="slide-up">
              <CardHeader>
                <CardTitle>Календарь записи</CardTitle>
                <CardDescription>Выберите дату для занятия</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <div className="space-y-6 slide-up">
              <Card>
                <CardHeader>
                  <CardTitle>Доступное время</CardTitle>
                  <CardDescription>На {selectedDate?.toLocaleDateString('ru-RU')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {['09:00', '10:30', '12:00', '14:00', '15:30', '17:00'].map((time) => (
                      <Button key={time} variant="outline" className="h-12">
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Предметы</CardTitle>
                  <CardDescription>Выберите предмет для изучения</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {subjects.map((subject) => (
                      <Button key={subject.name} variant="outline" className="h-12 justify-start">
                        <div className={`w-3 h-3 rounded-full ${subject.color} mr-2`}></div>
                        {subject.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h3>
            <p className="text-lg text-gray-600">Преимущества нашего образовательного центра</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow slide-up">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon name={feature.icon} size={32} className="text-primary" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Готовы начать обучение?</h3>
          <p className="text-xl mb-8 text-blue-100">Запишитесь на первое занятие и оцените качество нашего преподавания</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Mail" size={20} className="mr-2" />
              info@educenter.ru
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="GraduationCap" size={24} className="text-primary" />
              <span className="text-lg font-semibold">EduCenter</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 EduCenter. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;