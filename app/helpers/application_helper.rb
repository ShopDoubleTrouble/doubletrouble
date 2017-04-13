module ApplicationHelper

  # Creates the breadcrumbs in the header. Based on Spree's default generator:
  # https://github.com/spree/spree/blob/8bfa0824d2a7f6cfa6efc9bd4e32d1d564f6270b/frontend/app/helpers/spree/frontend_helper.rb#L8
  def dt_breadcrumbs(taxon, separator="&nbsp;")
    return "" if current_page?("/") || taxon.nil?
    separator = raw(separator)

    crumb_generator = lambda do |text, url|
      content_tag(:li,
          link_to(
            text,
            url,
            itemprop: "url",
            class: "gray-color"
          ) + separator,
        itemscope: "itemscope",
        itemtype: "https://schema.org/ListItem",
        itemprop: "item"
      )
    end

    crumbs = [ crumb_generator.call(Spree.t(:home), spree.root_path)  ]

    if taxon
      crumbs << crumb_generator.call(Spree.t(:products), spree.products_path)
      crumbs << taxon.ancestors.includes(:translations).collect { |ancestor|
          crumb_generator.call(ancestor.name, seo_url(ancestor))
        } unless taxon.ancestors.empty?
      crumbs << crumb_generator.call(taxon.name, seo_url(taxon))
    else
      crumbs << crumb_generator.call(Spree.t(:products), "#")
    end

    return crumb_list = content_tag(:ol,
        raw(crumbs.flatten.map(&:mb_chars).join),
        class: 'breadcrumb breadcrumb-menubar',
        itemscope: "itemscope",
        itemtype: "https://schema.org/BreadcrumbList"
      )

  end

  # Builds a list with all the taxonomy items. Based on Spree's default implementation
  # https://github.com/spree/spree/blob/49847585307538707dc8b87a875d1a279645d30d/frontend/app/helpers/spree/frontend_helper.rb#L84
  def dt_taxons_tree(root_taxon, current_taxon, max_level = 1)
    return '' if max_level < 1 || root_taxon.leaf?
    content_tag :ul do
      taxons = root_taxon.children.includes(:translations).map do |taxon|
        content_tag :li do
          safe_join([
            content_tag(:i, nil, class: 'icon_stop'),
            link_to(taxon.name, seo_url(taxon))
          ])
        end
     end
     safe_join(taxons)
    end
  end

  # Builds the Navbar Menu Items corresponding to the configured taxonomies
  def nav_bar_taxon(root_taxon, max_level = 1, override_text = false)

    # Is this a single item?
    if max_level < 1 || root_taxon.leaf?

      #Individual link
      return content_tag :li do

        # Hardcoded special link style
        classes = []
        if root_taxon.name == "DT Club" || root_taxon.name == "Brand"
          classes << "btn primary-color"
        end

        link_to seo_url(root_taxon), class:classes do
          (override_text)? Spree.t(:all) : root_taxon.name
        end
      end

    else

      #Build the dropdown
      content_tag :li, class:'dropdown'  do

        # Build the link
        link = link_to root_taxon.name,
          seo_url(root_taxon.root),
          :class => "dropdown-toggle",
          :data => {toggle:"dropdown"},
          :aria => {haspopup:"true"},
          :role => "button"

        # Elements inside the dropdown
        elements = root_taxon.children
          .includes(:translations)
          .map{|child| nav_bar_taxon child, max_level-1 }
          .prepend nav_bar_taxon(root_taxon, 0, true)

        # Encapsulate all items inside an <ul> item
        content = content_tag :ul, safe_join(elements), class:'dropdown-menu'

        safe_join [link, content]
      end

    end

  end

  # Lists all the social networks for the site
  def social_links
    return [
      {name:"Facebook", url:"https://facebook.com/doubletroublepty/"},
      {name:"Instagram", url:"https://instagram.com/doubletroublepty/"}
    ]
  end

end
