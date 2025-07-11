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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-xl border-b border-indigo-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-xl">
                <Icon name="Shield" className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ТендерПро
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                О нас
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Услуги
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Тендерное сопровождение
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block">
                  и банковские гарантии
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Профессиональные услуги по участию в государственных закупках.
              <br className="hidden md:block" />
              Полное сопровождение от подачи заявки до получения контракта.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
              >
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 px-8 py-4 text-lg"
              >
                <Icon name="ArrowRight" className="mr-2 h-5 w-5" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-32 bg-gradient-to-br from-white to-indigo-50/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              О нас
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Более 8 лет помогаем предпринимателям успешно участвовать в
              государственных закупках
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                <Icon name="Award" className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Опыт</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Более 500 успешных участий в тендерах
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                <Icon name="Users" className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Команда</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Профессиональные юристы и тендерные специалисты
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                <Icon name="Clock" className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Скорость
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Быстрое оформление документов и банковских гарантий
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-32 bg-gradient-to-br from-gray-50 to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши услуги
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Полный спектр услуг для успешного участия в государственных
              закупках
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-xl">
                  <Icon name="FileText" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Тендерное сопровождение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Полная подготовка документов, анализ конкурсной документации,
                  подача заявок и сопровождение до заключения контракта
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-xl">
                  <Icon name="Shield" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Банковские гарантии
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Быстрое получение банковских гарантий для участия в тендерах.
                  Работаем с ведущими банками России
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-xl">
                  <Icon name="Search" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Поиск тендеров
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Мониторинг и анализ тендерных площадок, подбор подходящих
                  закупок под профиль вашего бизнеса
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-xl">
                  <Icon name="CheckCircle" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Аккредитация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Помощь в получении аккредитации на электронных торговых
                  площадках и регистрации в реестрах
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-xl">
                  <Icon name="MessageCircle" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Консультации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Профессиональные консультации по вопросам участия в
                  госзакупках и тендерного законодательства
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 bg-gradient-to-br from-white to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Контакты
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Свяжитесь с нами для получения консультации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Наши контакты
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl">
                    <Icon name="Phone" className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">
                    +7 (495) 123-45-67
                  </span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl">
                    <Icon name="Mail" className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">
                    info@tenderpro.ru
                  </span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl">
                    <Icon name="MapPin" className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">
                    г. Москва, ул. Примерная, д. 1
                  </span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl">
                    <Icon name="Clock" className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">
                    Пн-Пт: 9:00 - 18:00
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Написать нам
              </h3>
              <form className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-gray-700 text-lg font-medium"
                  >
                    Имя
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-indigo-500 rounded-xl"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="text-gray-700 text-lg font-medium"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-indigo-500 rounded-xl"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-gray-700 text-lg font-medium"
                  >
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-indigo-500 rounded-xl"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-gray-700 text-lg font-medium"
                  >
                    Сообщение
                  </Label>
                  <Textarea
                    id="message"
                    className="mt-2 text-lg border-2 border-gray-200 focus:border-indigo-500 rounded-xl resize-none"
                    rows={4}
                    placeholder="Опишите ваш вопрос"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
                >
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-xl">
                <Icon name="Shield" className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                ТендерПро
              </h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Профессиональное тендерное сопровождение и банковские гарантии
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg font-medium"
              >
                О нас
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg font-medium"
              >
                Услуги
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg font-medium"
              >
                Контакты
              </a>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-700 text-gray-400">
              <p className="text-lg">
                &copy; 2024 ТендерПро. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
