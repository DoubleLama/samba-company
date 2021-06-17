class ApplicationController < ActionController::API
  before_action :ensure_www

  def fallback_index_html
    render file: 'public/index.html'
  end

  protected
  
  def ensure_www
    if request.subdomain != 'www'
      redirect_to url_for(subdomain: 'www', only_path: false)
    end
  end
end
