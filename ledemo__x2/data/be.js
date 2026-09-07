export const be = {
	statement: {
		present: `
			I am here<br>
			{He, She, It} is here<br>
			{You, We, They} are here
		`,
		past: `
			{I, He, She, It} was here<br>
			{You, We, They} were here
		`,
		future: `
			{I, He, She, It, You, We, They} will be here
		`
	},
	negation: {
		present: `
			I am not here<br>
			{He, She, It} is not here<br>
			{You, We, They} are not here
		`,
		past: `
			I was not here<br>
			{He, She, It} was not here<br>
			{You, We, They} were not here
		`,
		future: `
			{I, He, She, It, You, We, They} will not be
		`
	},
	question: {
		present: `
			Am I?<br>
			Is {he, she, it}?<br>
			Are {you, we, they}?
		`,
		past: `
			Was {I, he, she, it}?<br>
			Were {you, we, they}?
		`,
		future: `
			Will {I, he, she, it, you, we, they} be?

		`
	}
}

export const love = {
	statement: {
		present: `
			{I, You, We, They} {verb}<br>
			{He, She} {verb}s
		`,
		past: `
			{I, You, We, They, He, She} {verb}ed<br>
			{I, You, We, They, He, She} {verb(3)}<br>
		`,
		future: `
			{I, You, We, They, He, She} will {verb}
		`
	},
	negation: {
		present: `
			{I, You, We, They} don't {verb}<br>
			{He, She} doesn't {verb}
		`,
		past: `
			{I, You, We, They} didn't not {verb}<br>
			{He, She} didn't {verb}
		`,
		future: `
			{I, You, We, They, He, She} will not {verb}
		`
	},
	question: {
		present: `
			Do {I, you, we, they} {verb}?<br>
			Does {he, she} {verb}?
		`,
		past: `
			Did {I, you, we, they, he, she} {verb}?
		`,
		future: `
			Will {I, you, we, they, he, she} {verb}?

		`
	}
}

export const helper = {

0: `
<div class="row mt-3 pt-3 pb-2 align-items-center helper_doc">
	<div class="col-4 mb-3">
		Кто?<br>
		I Я<br>
		You Ты<br>
		He Он<br>
		She Она<br>
		We Мы<br>
		They Они
	</div>
	<div class="col-4 mb-3">
		Кого? Кому?<br>
		Me Мне<br>
		You Тебе<br>
		Him Ему<br>
		Her Ей<br>
		Us Им<br>
		Them Их
	</div>
	<div class="col-4 mb-3">
		Чей? Чейо?<br>
		My Мое<br>
		Your Твое<br>
		His Его<br>
		Her Ее<br>
		Our Наше<br>
		Their	Ваше
	</div>


<div class="col-12 mb-3 text-center">--------------------------------------------</div>

<div class="col-2 mb-3 font-weight-bold">
What<br>
Who<br>
Where<br>
When<br>
Why<br>
How
</div>
<div class="col-10 mb-3">
что, какой<br>
кто<br>
где, куда<br>
когда<br>
почему, зачем<br>
как, каким образом
</div>

<div class="col-12 mb-3 text-center">---------------------------------------------</div>

<div class="col-2 mb-3 font-weight-bold">
In<br>
To<br>
For<br>
From<br>
Here<br>
There
</div>
<div class="col-10 mb-3">
B<br>
приближение(Куда, К чему, К кому)<br>
для, за<br>
удаление(Откуда, От кого, Из чего)<br>
здесь, сюда<br>
там, туда
</div>

<div class="col-12 mb-3 text-center">---------------------------------------------</div>

<div class="col-3 mb-3 font-weight-bold">
I apoligize<br>
I regreat<br>
Excuse Me<br>
Forgive
</div>
<div class="col-9 mb-3">
я извиняюсь (с принятием вины)<br>
я сожалею (без вины)<br>
извините меня<br>
простить
</div>

<div class="col-12">aртикли</div>
<div class="col-3 mb-1 font-weight-bold">
	the, this<br>
	a, an
</div>
<div class="col-9 mb-1">
	этот<br>
	один
</div>
<div class="col-12 mb-3">
	если глагол с гласной <br>
	<span class="font-weight-bold">an actor</span>
</div>

<div class="col-12 mb-1">Окончание <span class="font-weight-bold">ing</span> в процессе</div>
<div class="col-3 mb-3 font-weight-bold">
	speaking<br>
	cooking
</div>
<div class="col-9 mb-3">
	говорю<br>
	готовлю
</div>

<div class="col-12 mb-3">Неопределеная форма перед глаголом добавляется <span class="font-weight-bold">to</span><br>
	<span class="font-weight-bold">
		to speak<br>
		to dance<br>
		to be
	</span>
</div>
</div>
`,

3: `
<div class="row mt-3 pt-3 pb-2 align-items-center helper_doc">
	<div class="col-12 mb-3">
		временые индикаторы<br>
		<span class="font-weight-bold">yesterday</span> - 
		<span class="font-weight-bold">today</span> - 
		<span class="font-weight-bold">now</span> - 
		<span class="font-weight-bold">tomorrow</span>
	</div>

	<div class="col-12 mb-3">
		прошлый - текущий - следующий<br>
		<span class="font-weight-bold">last - this - next</span>
	</div>


	<div class="col-4 mb-3 text-right">			
		(назад) <span class="font-weight-bold">ago</span><br>
		(через) <span class="font-weight-bold">in</span>
	</div>
	<div class="col-8 font-weight-bold mb-3">
		3 days<br>
		2 weeks<br>
		4 months<br>
		5 years
	</div>


	<div class="col-12 mb-3">
		время<br>
		<span class="font-weight-bold">at five</span>
	</div>

	<div class="col-12 mb-3">
		день недели<br>
		<span class="font-weight-bold">on Monday</span>
	</div>

	<div class="col-12 mb-3">
		месяц<br>
		<span class="font-weight-bold">in May<br>
		in winter</span>
	</div>

	<div class="col-4 font-weight-bold">
		This week<br>
		This month<br>
		This year<br>
		Next month<br>
		Last week<br>
		This time<br>
		Next time<br>
		Last time
	</div>
	<div class="col-8">
		на єтой неделе<br>
		в єтом месяце<br>
		в этом году<br>
		в следующем месяце<br>
		на прошлой неделе<br>
		на этот раз<br>
		в следующий раз<br>
		в прошлый раз
	</div>
</div>`,

5: `
<div class="row mt-3 pt-3 pb-2 align-items-center helper_doc">
<div class="col-12 mb-1">
Для абстрактного определения количества, когда не возможно точно посщитать</div>
<div class="col-12 mb-3 font-weight-bold">
<div class="align-items-center row">
<div class="col-4">
	Hove much
</div>
<div class="col-8">
	time<br>
	money<br>
	love
</div>
</div>
</div>

<div class="col-12 mb-1">Когда можно точно сказать количество</div>
<div class="col-12 mb-3 font-weight-bold">
<div class="align-items-center row">
<div class="col-4">
	Hove many
</div>
<div class="col-8">
	days<br>
	hours<br>
	dollars<br>
	peoples
</div>
</div>
</div>

<div class="col-12 mb-1">Люди</div>

<div class="col-12 mb-3">Everybody - все, каждый
Somebody - ктото, ктонибудь, коекто
Nobody - никто</div>

<div class="col-12 mb-1">Предметы</div>

<div class="col-12 mb-3">Everything - все
Something - что-нибудь, чтото, коечто
Nothing - ничего</div>


<div class="col-12 mb-1">Пространство</div>

<div class="col-12 mb-3">Everywhere - везде, всюду
Somewhere - гдето, кудато, гденибудь
Nowhere - нигде</div>


<div class="col-12 mb-1">Время</div>

<div class="col-12 mb-3">Always - всегда
Sometimes - иногда
Never - никогда</div>

<div class="col-12 mb-1">Если на глагол что делать зананчивается на "...ть" то перед глаголом нужна частица "to"</div>
<div class="col-12 mb-3">(кушать - to eat, пить - to drink)</div>
</div></div>
`,

7: `
<div class="row mt-3 pt-3 pb-2 align-items-center helper_doc">
<div class="col-3 font-weight-bold">
	in<br>
	in Kiev<br>
	in the market
</div>
<div class="col-9">
	в (внутри чегото)<br>
	в Киеве (живу в Киеве)<br>
	на рынке
</div>

<div class="col-12">-----------------------------------------------------</div>

<div class="col-3 font-weight-bold">
	to<br>
	to Kiev
</div>
<div class="col-9">
	к, в (направление, по направлению к)<br>
	в Киев (еду в Киев)
</div>

<div class="col-12">-----------------------------------------------------</div>

<div class="col-3 font-weight-bold">
	from<br>
	from Kiev<br>
	from you<br>
	far from you
</div>
<div class="col-9">
	от (удаление из чегото, от когото, от куда)<br>
	из Киева<br>
	от тебя<br>
	далеко от тебя
</div>

<div class="col-12">-----------------------------------------------------</div>

<div class="col-3 font-weight-bold">
	under<br>
	under ground
</div>
<div class="col-9">
	под (под чемто)<br>
	под землей
</div>

<div class="col-12">-----------------------------------------------------</div>

<div class="col-3 font-weight-bold">
	on<br>
	on the table<br>
	knock on the table
</div>
<div class="col-9">
	на, по (на чемто)<br>
	на столе<br>
	постучать по столу
</div>

<div class="col-12">-----------------------------------------------------</div>

<div class="col-3 font-weight-bold">
	at<br>
	at school<br>
	at home<br>
	at the market
</div>
<div class="col-9">
у чегото (присутствие, но не обязательное нахождение внутри)<br>
в школе<br>
дома<br>
на территории рынка
</div>
<div class="col-12"><span class="font-weight-bold">I will meet you at three o'clock</span> - я встречусть стобой в 3 часа</div>

<div class="col-12">-----------------------------------------------------</div>

<div class="col-12"><span class="font-weight-bold">over</span> - над</div>

<div class="col-12">-----------------------------------------------------</div>

<div class="col-5 font-weight-bold">
	between<br>
	between you and me<br>
	between us
</div>
<div class="col-7">
	между (между 2 объектами)<br>
	между мной и тобой<br>
	между нами
</div>

<div class="col-12">-----------------------------------------------------</div>

<div class="col-5 font-weight-bold">
	with<br>
	with you<br>
	with me
</div>
<div class="col-7">
	c<br>
	с тобой<br>
	со мной
</div
<div class="col-5 font-weight-bold">
	without<br>
	without<br>
	tea without sugar
</div>
<div class="col-7">
	без<br>
	без тебя<br>
	чай без сахара
</div>

<div class="col-12">-----------------------------------------------------</div>

<div class="col-12">about - о, около (о ком, о чем)</div>

<div class="col-12">Go Идти
Come Приходить
Take Взять
Put Положить
Get Получить</div>

<div class="col-12">Go up - подниматся
Go down - спускатся
Go back - возвращатся
Go away - прочь, в сторону
Go in - заходить, зайти
Go out - выходить, выйти</div>

<div class="col-12">Look up - посмотреть вверх
Look down - посмотреть вниз
Look back - оглянутся
Look away - отвернутся
Look in - заглянуть
Look out - выглянуть
Look for - искать</div>

<div class="col-12">Take up - поднять
Take down - опустить
Take away - отобрать
Take in - внести
Take out - вынести
</div></div>
`
}