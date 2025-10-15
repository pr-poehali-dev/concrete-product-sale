import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Бетонные блоки',
      description: 'Высокопрочные блоки для строительства',
      price: '3,500 ₽',
      image: 'https://cdn.poehali.dev/projects/567dfc05-b59d-4ab9-92a3-5fbf26dccb29/files/749d5d9b-f5f9-4863-9f69-c956718beb68.jpg'
    },
    {
      id: 2,
      name: 'Тротуарная плитка',
      description: 'Износостойкая плитка для дорожек',
      price: '2,800 ₽',
      image: 'https://cdn.poehali.dev/projects/567dfc05-b59d-4ab9-92a3-5fbf26dccb29/files/749d5d9b-f5f9-4863-9f69-c956718beb68.jpg'
    },
    {
      id: 3,
      name: 'Бордюры',
      description: 'Прочные дорожные бордюры',
      price: '1,200 ₽',
      image: 'https://cdn.poehali.dev/projects/567dfc05-b59d-4ab9-92a3-5fbf26dccb29/files/749d5d9b-f5f9-4863-9f69-c956718beb68.jpg'
    },
    {
      id: 4,
      name: 'Фундаментные блоки',
      description: 'Блоки ФБС для фундамента',
      price: '5,900 ₽',
      image: 'https://cdn.poehali.dev/projects/567dfc05-b59d-4ab9-92a3-5fbf26dccb29/files/749d5d9b-f5f9-4863-9f69-c956718beb68.jpg'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Жилой комплекс "Новый город"',
      description: 'Поставка фундаментных блоков',
      image: 'https://cdn.poehali.dev/projects/567dfc05-b59d-4ab9-92a3-5fbf26dccb29/files/aaf879a3-5c78-4033-b8da-37dce2fde6fb.jpg',
      year: '2024'
    },
    {
      id: 2,
      title: 'Парковая зона "Центральная"',
      description: 'Укладка тротуарной плитки',
      image: 'https://cdn.poehali.dev/projects/567dfc05-b59d-4ab9-92a3-5fbf26dccb29/files/aaf879a3-5c78-4033-b8da-37dce2fde6fb.jpg',
      year: '2024'
    },
    {
      id: 3,
      title: 'Торговый центр "Метрополь"',
      description: 'Комплексная поставка бетонных изделий',
      image: 'https://cdn.poehali.dev/projects/567dfc05-b59d-4ab9-92a3-5fbf26dccb29/files/aaf879a3-5c78-4033-b8da-37dce2fde6fb.jpg',
      year: '2023'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <Icon name="Blocks" className="text-primary-foreground" size={24} />
              </div>
              <span className="text-2xl font-bold text-foreground">БЕТОН-МАСТЕР</span>
            </div>
            <div className="hidden md:flex gap-8">
              {['home', 'catalog', 'production', 'delivery'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary uppercase tracking-wide ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'production' && 'О производстве'}
                  {section === 'delivery' && 'Доставка'}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-secondary to-secondary/70">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.1) 35px, rgba(0,0,0,.1) 70px)`
            }} />
          </div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-primary text-primary-foreground text-sm px-4 py-1">
                ПРОИЗВОДСТВО БЕТОННЫХ ИЗДЕЛИЙ
              </Badge>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
                ПРОЧНОСТЬ<br />И КАЧЕСТВО
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl font-light">
                Производим высококачественные бетонные изделия для строительства. 
                Собственное производство, доставка по всему региону.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-base"
                  onClick={() => scrollToSection('catalog')}
                >
                  Посмотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-base bg-white/10 text-white border-white/30 hover:bg-white/20"
                  onClick={() => scrollToSection('production')}
                >
                  О производстве
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: 'Factory', label: 'Собственное производство', value: '15 лет' },
                { icon: 'Truck', label: 'Доставка', value: '24/7' },
                { icon: 'Shield', label: 'Гарантия качества', value: '100%' },
                { icon: 'Users', label: 'Довольных клиентов', value: '500+' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 mb-4">
                    <Icon name={stat.icon} size={32} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="catalog" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 text-foreground">Каталог продукции</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Широкий ассортимент качественных бетонных изделий для любых строительных задач
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">{product.price}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{product.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Заказать
                      <Icon name="ShoppingCart" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="production" className="py-20 bg-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://cdn.poehali.dev/projects/567dfc05-b59d-4ab9-92a3-5fbf26dccb29/files/ca3fe50b-7ded-44a8-a2a2-0fd6af5ee44c.jpg"
              alt="Production"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold mb-8 text-center">О производстве</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name="Award" size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Современное оборудование</h3>
                      <p className="text-white/80">
                        Используем автоматизированные линии производства европейского качества
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name="Microscope" size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Контроль качества</h3>
                      <p className="text-white/80">
                        Каждая партия проходит многоступенчатую проверку в собственной лаборатории
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name="Leaf" size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Экологичность</h3>
                      <p className="text-white/80">
                        Применяем только сертифицированное экологически чистое сырье
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name="Zap" size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Быстрое производство</h3>
                      <p className="text-white/80">
                        Выполняем заказы в короткие сроки без потери качества
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 text-foreground">Реализованные проекты</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Наши изделия используются в крупнейших строительных проектах региона
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">{project.year}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="delivery" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold mb-12 text-center text-foreground">Доставка</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <Icon name="MapPin" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">По всему региону</h3>
                    <p className="text-muted-foreground">
                      Доставляем продукцию в любую точку области собственным транспортом
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <Icon name="Clock" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Быстрая доставка</h3>
                    <p className="text-muted-foreground">
                      Стандартный срок доставки — 1-2 дня, срочная доставка — в день заказа
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <Icon name="Package" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Разгрузка</h3>
                    <p className="text-muted-foreground">
                      Предоставляем услуги по разгрузке и укладке материалов на объекте
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6">Готовы начать проект?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Свяжитесь с нами для расчета стоимости и обсуждения деталей вашего заказа
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-base">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (800) 123-45-67
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/30 text-white hover:bg-white/10">
                <Icon name="Mail" size={20} className="mr-2" />
                info@beton-master.ru
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                  <Icon name="Blocks" className="text-primary-foreground" size={24} />
                </div>
                <span className="text-xl font-bold">БЕТОН-МАСТЕР</span>
              </div>
              <p className="text-white/70 text-sm">
                Производство качественных бетонных изделий с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Продукция</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Бетонные блоки</li>
                <li>Тротуарная плитка</li>
                <li>Бордюры</li>
                <li>Фундаментные блоки</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>О производстве</li>
                <li>Доставка</li>
                <li>Контакты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@beton-master.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Промышленная 15
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© 2024 Бетон-Мастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
