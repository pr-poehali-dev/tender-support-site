import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-900">ТендерПро</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#services"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Тендерное сопровождение
              <span className="text-blue-600 block">и банковские гарантии</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Профессиональные услуги по участию в государственных закупках.
              Полное сопровождение от подачи заявки до получения контракта.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              О нас
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Более 8 лет помогаем предпринимателям успешно участвовать в
              государственных закупках
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Award" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Опыт
              </h3>
              <p className="text-slate-600">
                Более 500 успешных участий в тендерах
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Users" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Команда
              </h3>
              <p className="text-slate-600">
                Профессиональные юристы и тендерные специалисты
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Clock" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Скорость
              </h3>
              <p className="text-slate-600">
                Быстрое оформление документов и банковских гарантий
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Полный спектр услуг для успешного участия в государственных
              закупках
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-600 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="FileText" className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Тендерное сопровождение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Полная подготовка документов, анализ конкурсной документации,
                  подача заявок и сопровождение до заключения контракта
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-600 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="Shield" className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Банковские гарантии
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Быстрое получение банковских гарантий для участия в тендерах.
                  Работаем с ведущими банками России
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-600 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="Search" className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Поиск тендеров
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Мониторинг и анализ тендерных площадок, подбор подходящих
                  закупок под профиль вашего бизнеса
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-600 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Аккредитация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Помощь в получении аккредитации на электронных торговых
                  площадках и регистрации в реестрах
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-600 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Консультации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Профессиональные консультации по вопросам участия в
                  госзакупках и тендерного законодательства
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Контакты
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Свяжитесь с нами для получения консультации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Наши контакты
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-600">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-600">info@tenderpro.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-600">
                    г. Москва, ул. Примерная, д. 1
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-600">Пн-Пт: 9:00 - 18:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Написать нам
              </h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-slate-700">
                    Имя
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    className="mt-1"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-1"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-slate-700">
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="mt-1"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-slate-700">
                    Сообщение
                  </Label>
                  <Textarea
                    id="message"
                    className="mt-1"
                    rows={4}
                    placeholder="Опишите ваш вопрос"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Shield" className="h-8 w-8 text-blue-400" />
              <h2 className="text-2xl font-bold">ТендерПро</h2>
            </div>
            <p className="text-slate-400 mb-4">
              Профессиональное тендерное сопровождение и банковские гарантии
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#about"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                О нас
              </a>
              <a
                href="#services"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#contact"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Контакты
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800 text-slate-400">
              <p>&copy; 2024 ТендерПро. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
