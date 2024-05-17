import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCoursesDTO } from './dto/create-courses.dto';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) { }

    @Get()
    async getCourses() {
        const courses = await this.coursesService.getCourses();
        return courses;
    }

    @Get(':courseID')
    async getCourse(@Param('courseID') courseID) {
        const course = await this.coursesService.getCourse(courseID);
        return course;
    }

    @Post()
    async addCourse(@Body() createCoursesDTO: CreateCoursesDTO) {
        const course = await this.coursesService.addCourse(createCoursesDTO);
        return course;
    }

    @Delete(':courseID')
    async deleteCourse(@Param('courseID') courseID) {
        const courses = await this.coursesService.deleteCourse(courseID);
        return courses;
    }
}