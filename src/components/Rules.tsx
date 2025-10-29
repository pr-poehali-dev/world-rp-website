import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Rules = () => {
  const ruleCategories = [
    {
      title: 'Общие правила',
      icon: 'BookOpen',
      rules: [
        'Уважительное отношение к игрокам и администрации',
        'Запрещено использование читов, багов и эксплойтов',
        'Запрещена реклама сторонних проектов',
        'Игровой ник должен быть в формате Имя_Фамилия'
      ]
    },
    {
      title: 'Ролевая игра',
      icon: 'Users',
      rules: [
        'Обязательна отыгровка действий персонажа',
        'Запрещен NonRP (нереалистичное поведение)',
        'Запрещен MG (использование OOC информации в IC)',
        'Запрещен PG (нереалистичные действия)'
      ]
    },
    {
      title: 'Взаимодействие',
      icon: 'MessageSquare',
      rules: [
        'Запрещено убийство без причины (DeathMatch)',
        'Запрещено угон без причины (CarJack)',
        'Обязательно давать время на отыгровку',
        'Запрещены оскорбления в /b чате'
      ]
    },
    {
      title: 'Наказания',
      icon: 'Shield',
      rules: [
        'Предупреждение - за мелкие нарушения',
        'Кик - за повторные нарушения',
        'Бан 1-7 дней - за серьезные нарушения',
        'Перманентный бан - за критические нарушения'
      ]
    }
  ];

  return (
    <section id="rules" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Правила сервера
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ознакомьтесь с правилами для комфортной игры. Незнание правил не освобождает от ответственности
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {ruleCategories.map((category, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name={category.icon as any} size={20} />
                    </div>
                    <span className="text-xl font-semibold">{category.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <ul className="space-y-3 mt-4">
                    {category.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-primary" />
                        </div>
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 bg-card border border-primary/30 rounded-xl p-6 text-center">
            <Icon name="AlertCircle" size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Важно!</h3>
            <p className="text-muted-foreground">
              За нарушение правил предусмотрены наказания от предупреждения до перманентного бана. 
              Администрация оставляет за собой право решать спорные ситуации.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
