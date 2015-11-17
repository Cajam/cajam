class SubtasksController < ApplicationController

  def new
    @project = Project.find(params[:project_id])
    @subtask = Subtask.new
  end

  def create
    @project = Project.find(params[:project_id])
    @subtask = @project.subtasks.create!(subtask_params)
    redirect_to project_path(@project)
  end

  private
    def subtask_params
      params.require(:subtask).permit(:title, :description, :subhours, :subminutes)
    end
end