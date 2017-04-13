module ProductsHelper

  # Builds the Options values for a Product Variant Select
  def options_for_variant_select(product, current_currency)

    # Build the variant's text
    variant_text_builder = lambda do |variant|
      text = variant_options(variant)
      if not variant.can_supply?
        text.concat " (#{Spree.t(:out_of_stock)})"
      elsif variant_price variant
        text.concat " - #{variant_price variant}"
      end
      return text
    end

    # Enumerate all the variants and addd an option element for each
    return options_for_select(product
      .variants_and_option_values(current_currency)
      .collect{|variant| [variant_text_builder.call(variant), variant.id] })
  end

  # Get all images for a single product, including variants
  def images_for_product(product)
    image_array = []
    image_array.concat product.images

    # Add variants' images
    if product.has_variants?
      product.variant_images.each do |image|
        next if product.images.include?(image)
        image_array << image
      end
    end

    return image_array
  end

  def sku_array_for_product(product)
    sku_array = [product.sku]

    if product.has_variants?
      product.variants.each do |variant|
        sku_array << variant.sku
      end
    end

    return sku_array
  end

  def image_tag_generator_for_product(main_url, image_url)
    link_to main_url, itemprop: "url" do
      image_tag image_url,
        itemprop: "image",
        class:"img-responsive"
    end
  end

  def social_share(product)

    # Build URLs
    seo_url = spree.product_url product
    urls_array = [
      {
        url:"https://www.facebook.com/sharer/sharer.php?u=" + seo_url,
        class:'social_facebook',
      },
      {
        url:"https://twitter.com/home?status=" + Spree.t(:found_this_on_doubletrouble) + ": " + seo_url,
        class:'social_twitter',
      },
      {
        url:"https://plus.google.com/share?url=" + seo_url,
        class:"social_googleplus",
      }
    ]

    # Build pinterest URL, if the product has an image
    product_image = product.images.first
    if (product_image)
      p_url = "https://pinterest.com/pin/create/button/?url=%{seo_url}&media=%{image}&description=%{description}" % {
        seo_url:seo_url,
        image:product_image&.attachment&.url,
        description:Spree.t(:found_this_on_doubletrouble)
      }

      urls_array << {
        url:p_url,
        class:"social_pinterest"
      }
    end

    #Build the individual items and concatenate
    content_tag :ul, class:'list-items' do
      urls_array.reduce(''){|arr, struct|
        arr << content_tag(:li) do
          link_to struct[:url] do
            content_tag :i, nil, class:struct[:class]
          end
        end
      }.html_safe
    end
  end

end
