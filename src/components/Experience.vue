<script setup lang="ts">
import { Store } from '@/stores/store'
import { storeToRefs } from "pinia";
import { ref, watch } from 'vue';
import { ElTimeline, ElTimelineItem, ElCard } from 'element-plus'

const store = Store()

const {lang} = storeToRefs(store)

interface Responsibility {
	name: string,
	description: string[]
}

interface Experience {
	start_date: string,
	end_date: string,
	company: string,
	site?: string,
	location: string,
	position: string,
	responsibility_name: string,
	responsibility: Responsibility[],
	team: string,
	tools: string
}

interface Experiences {
	name: string,
	exp: Experience[]
}

const ExperiencesRus: Experiences = {
	name: 'Опыт работы',
	exp:
	[
		{
			start_date: 'Декабрь 2018',
			end_date: 'Октябрь 2022',
			company: 'Сбер',
			site: 'http://www.sberbank.ru/',
			location: 'Москва',
			position: 'Системный аналитик',
			responsibility_name: 'Функциональные обязанности:',
			responsibility: [{
				name: 'Аналитика:',
				description: [
					'Поддержка интеграционного взаимодействия (схемы интеграции запрос-ответ, \
					оптимизация межсистемного взаимодействия и т.д.), согласование проектной документации.',
					'Участие в разработке языка DSL на базе Python как инструмента due diligence \
					в корпоративном кредитовании.',
					'Создание руководства пользователя и администратора для внутреннего сервиса.',
					'Создание внутренней аналитического сервиса для команды аудиторов для хранения \
					данных и загрузки необходимой информации.',
					'Выявление технических/логических ошибок и формирование предложений по улучшению \
					работы сервиса Робот юрист с последующей фиксацией.',
					'Разработка и техническая поддержка проектов LegalTech, дальнейшее развитие \
					автоматизированного процесса due diligence (исследование AS IS, разработка TO BE процессов).',
					'При взаимодействии с командой DS участвовал в создании и улучшении до 90% \
					F-меры сервиса для формирования объединенного документа на основе машинного обучения.'
				]
				},{
					name: 'Управление проектом:',
					description: [
						'Формирование бэклога, координация ресурсов команды во время спринта, \
						подготовка к развертыванию релизов и т.д.'
					]
				}
			],
			team: 'Команда: 10 сотрудников',
			tools: 'Инструменты: PyCharm, Confluence, Jira, XMLSpy, Jenkins, Grafana, MS Excel и Word.'
		},
		{
			start_date: 'Ноябрь 2022',
			end_date: 'Апрель 2023',
			company: 'ООО Умная Автоматизация',
			site: 'turbocontract.ru',
			location: 'Москва, удаленно',
			position: 'Системный аналитик',
			responsibility_name: 'Функциональные обязанности:',
			responsibility: [{
				name: 'Аналитика:',
				description: [
					'Создание и согласование проектной документации по внедрению сервиса в контур Заказчика.\
					Сервис успешно внедрен и интегрирован с внутренними сервисами у всех Заказчиков.',
					'Формирование выгрузок из БД сервиса для последующей аналитики и фиксации в отчеты по работе системы.',
					'Выявление дефектов сервиса (описание сценария и гипотезы возникновения с последующей \
					приоритезацией и фиксацией задачи). Выявлено 15 критических дефектов блокирующих работу, \
					которые впоследствии были устранены.',
					'Подготовка технической документации по расширению функционала сервиса и тестирование результатов работ. \
					Добавлены 4 фичи, которые упростили работу пользователю и администратору сервиса.',
					'Самостоятельно производил новые релизы сервиса в внутреннем контуре банка.'
				]
				},{
					name: 'Управление проектом:',
					description: [
						'Согласование задач и этапов внедрения с Заказчиками и командой \
						разработки (приоритеты, сроки).'
					]
				}
			],
			team: 'Команда: 15 сотрудников',
			tools: 'Инструменты: Redmine, MS Excel и Word, Draw.io, Archi, VS Code, DBeaver, PuTTY, Postman, Docker, Docker-compose'
		},
		{
			start_date: 'Ноябрь 2022',
			end_date: 'н.в.',
			company: 'Extrum Technologies',
			location: 'Астана, удаленно',
			position: 'Системный аналитик',
			responsibility_name: 'Функциональные обязанности:',
			responsibility: [{
				name: 'Аналитика:',
				description: [
					'Формирование и согласование проектной документации с Заказчиками.',
					'Проработка и последующее согласованием с заказчиком и командой \
					разработки внутренней архитектуры сервиса, сроков и стоимости реализации, \
					интеграционных взаимодействий и дизайна.',
					'Тестирование готового функционала, заведение задач на доработку и т.д.',
					'Создание технической документации для небольших программ, \
					контроль за разработкой и тестирование. \
					Данные программы реализованы в кратчайшие сроки и оптимизировали \
					работу бизнес подразделений Заказчиков в несколько раз.']
				},{
					name: 'Управление проектом:',
					description: [
						'Формирование команды разработчиков и дизайнера.',
						'Формирование беклога, определение приоритета, сроков и контроль исполнения задач в срок.'
					]
				}
			],
			team: 'Команда: 8 сотрудников',
			tools: 'Инструменты: ClickUp, MS Excel и Word, Draw.io, Google Таблицы, VS Code, Figma, DBeaver, Postman, Docker, Docker-compose'
		},
	]
}

const ExperiencesEng: Experiences = {
	name: 'Work Experience',
	exp:
	[
		{
			start_date: 'December 2018',
			end_date: 'October 2022',
			company: 'Sber',
			site: 'http://www.sberbank.ru',
			location: 'Moscow',
			position: 'System Analyst',
			responsibility_name: 'Functional Responsibilities:',
			responsibility: [{
				name: 'Analytics:',
				description: [
					'Support of integration interaction (request-response integration schemes, \
					optimization of intersystem interaction, etc.), coordination of project documentation.',
					'Participation in the development of Python-based DSL language as a due \
					diligence tool in corporate lending.',
					'Creation of user and administrator manuals for internal service.',
					'Creation of an internal analytics service for the audit team to store \
					data and upload necessary information.',
					'Identification of technical/logical errors and formation of proposals to \
					improve the Robot Lawyer service with subsequent fixing.',
					'Development and technical support of LegalTech projects, \
					further development of automated due diligence process (research AS IS, development TO BE processes).',
					'In collaboration with the DS team, participated in creating and improving up to \
					90% F-measure of the service to generate a merged document based on machine learning.'
				]
				},{
					name: 'Project Management:',
					description: [
						'Backlog generation, coordinating team resources during sprints, preparing for release deployments, etc.'
					]
				}
			],
			team: 'Team: 10 employees',
			tools: 'Tools: PyCharm, Confluence, Jira, XMLSpy, Jenkins, Grafana, MS Excel и Word.'
		},
		{
			start_date: 'November 2022',
			end_date: 'April 2023',
			company: 'ООО Умная Автоматизация (Smart Automation Ltd.)',
			site: 'turbocontract.ru',
			location: 'Moscow, remotely',
			position: 'System analyst',
			responsibility_name: 'Functional responsibilities:',
			responsibility: [{
				name: 'Analytics:',
				description: [
					"Creation and coordination of project documentation on implementation of the service into the Customer's circuit.\
					The service has been successfully implemented and integrated with internal services of all Customers",
					'Formation of offloads from the service database for further analytics and fixation in reports on the system operation.',
					'Identification of service defects (description of the scenario and hypothesis of occurrence with subsequent \
					prioritization and fixation of the task). Identified 15 critical defects blocking the work, which were subsequently eliminated.',
					'Preparation of technical documentation to expand the functionality of the service and testing the results of the work.\
					Added 4 features that simplified the work for the user and administrator of the service',
					'Independently produced new releases of the service in the internal circuit of the bank.'
				]
				},{
					name: 'Project Management:',
					description: [
						'Coordinated implementation tasks and milestones with Customers and development team (priorities, deadlines).'
					]
				}
			],
			team: 'Team: 15 employees',
			tools: 'Tools: Redmine, MS Excel and Word, Draw.io, Archi, VS Code, DBeaver, PuTTY, Postman, Docker, Docker-compose'
		},
		{
			start_date: 'November 2022',
			end_date: 'present',
			company: 'Extrum Technologies',
			location: 'Astana, remotely',
			position: 'System Analyst',
			responsibility_name: 'Functional Responsibilities:',
			responsibility: [{
				name: 'Analytics:',
				description: [
					'Formation and coordination of project documentation with Customers.',
					'Working out and further coordination with the customer and the development team of \
					the internal architecture of the service, terms and cost of implementation, integration interactions and design.',
					'Testing of ready functionality, setting tasks for improvement, etc.',
					"Creation of technical documentation for small programs, development control and testing.\
					These programs were implemented in the shortest possible time and optimized the work of the Customer's business units several times."]
				},{
					name: 'Project management:',
					description: [
						'Formation of a team of developers and designer.',
						'Formation of backlog, prioritization, deadlines and control of tasks execution in time.'
					]
				}
			],
			team: 'Team: 10 employees',
			tools: 'Tools: ClickUp, MS Excel и Word, Draw.io, Google Таблицы, VS Code, Figma, DBeaver, Postman, Docker, Docker-compose'
		},
	]
}

const Experiences = ref<Experiences>(lang.value === 'eng' ? ExperiencesEng : ExperiencesRus)

watch(lang, (newLang) => {
	if (newLang !== 'eng') {
		Experiences.value = ExperiencesRus
	}
	else {
		Experiences.value = ExperiencesEng
	}
})

</script>

<template>
	<div>
		<h2 style="padding-bottom: 10px;"> {{ Experiences.name }} </h2>
		<el-timeline>
			<el-timeline-item v-for="(exp) in Experiences.exp" style="padding-inline-start: 0px"
			:timestamp="exp.start_date + ' - ' + exp.end_date" placement="top">
				<el-card>
					<h2> {{ exp.company }}</h2>
					<a :href="exp.site"> {{exp.site}}</a>
					<p>{{ exp.location }}</p>
					<p>{{ exp.position }}</p>
					<p>{{ exp.responsibility_name }}</p>
					<ul>
						<li v-for="res in exp.responsibility">
							{{ res.name }}
							<ul>
								<li v-for="des in res.description">
								{{ des }}
								</li>
							</ul>
						</li>
					</ul>
					<p>{{ exp.team }}</p>
					<p>{{ exp.tools }}</p>
				</el-card>
			</el-timeline-item>
		</el-timeline>
	</div>
</template>

<style>
</style>
